module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			my_target : {
				files : {
					'js/script.js': ['components/js/*.js']
				} // files
			}  // my_target
		}, // uglify

		less: {
 			development: {
    			options: {
      				paths: ["components/less"],
      				compress: true
      					},
    			files: {"css/styles.css": "components/less/styles.less"
    				}
  				},
			}, // less 

		watch: {
			scripts: {
				files: ['components/js/*.js'],
				tasks: ['uglify']
			}, // scripts
			css: {
				files: ['components/less/*.less'],
				tasks: ['less']
			} // css

		}, // watch

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                }, // bsFiles
                options: {
                    watchTask: true,
                    server: '.',
                    ghostMode: {
    					clicks: true,
    					forms: true,
    					scroll: true
					} // ghostMode
                } // options
            } // dev
        } // browserSync


	}) // initConfig


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-browser-sync');


	grunt.registerTask('default', ['browserSync', 'watch']);
} // exports 

