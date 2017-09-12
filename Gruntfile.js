'use strict';
module.exports = function(grunt){
    grunt.initConfig({
        watch: {
			options: {
				livereload: true,
			},
            all: {
                files: ['src/{,**/}*.*'],
                tasks: ['build']
            },
            sass: {
				files: ['src/styles/main.sass'],
				tasks: ['sass'],
            }
        },   
        mustache_render: {
            options: {},
            dist: {
                options: {
                    data: '',
                    directory: 'src/templates',
                    escape: false
                },
                files: [
                    {'build/index.html': 'src/templates/index.mustache'}
                ]
            }
        },
        sass: {
			dist: {
				files: {
				'build/styles/main.css': 'src/styles/main.sass', 
				}
			}
		}, 
        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/styles',
                        src: '**',
                        dest: 'build/styles/'
                    }
                ]
            },
            scripts: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/scripts',
                        src: '**',
                        dest: 'build/scripts/'  
                    }
                ]
            },
            images: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/gfx',
                        src: '**',
                        dest: 'build/gfx/'
                    }
                ]
            },
            svg: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/svg',
                        src: '**',
                        dest: 'build/svg/' 
                    }
                ]
            }
        }
    });
    grunt.registerTask('build', [
        'mustache_render',
        'copy'
    ]);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mustache-render');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['watch', 'sass', 'copy']);
};