module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			my_target : {
				files : {
					'_/js/script.js': ['_/components/js/*.js']
				} // files
			}  // my_target
		}, // uglify

		less: {
 			development: {
    			options: {
      				paths: ["_/components/less"],
      				compress: true
      					},
    			files: {"_/css/styles.css": "_/components/less/styles.less"
    				}
  				},
			}, // less 

		watch: {
			scripts: {
				files: ['_/components/js/*.js'],
				tasks: ['uglify']
			}, // scripts
			css: {
				files: ['_/components/less/*.less'],
				tasks: ['less']
			} // css

		}, // watch

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '_/css/*.css',
                        '*.html'
                    ]
                }, // bsFiles
                options: {
                    watchTask: true,
                    server: '.'
                } // options
            } // dev
        } // browserSync


	}) // initConfig

	grunt.registerTask('default', ['browserSync', 'watch']);
} // exports 

