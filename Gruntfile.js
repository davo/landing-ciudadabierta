'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'css/estilos.css': '**/*.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'css/*.scss',
                tasks: ['sass','cssmin','beep:2']
            },
            js: {
                files: 'js/*.js',
                tasks: ['uglify','beep:2']
            },
            options: {
                livereload: true
            }
        },
        cssmin: {
            target:{
                files:{
                'css/estilos.min.css': 'css/estilos.css'
                }
            }
        },

        uglify: {
            dist: {
              files: {
                'js/main.min.js': 'js/main.js'
              }
            }
        }

    });


    //Register modules to user
    grunt.loadNpmTasks('grunt-beep');    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Register tasks
    grunt.registerTask('default', ['watch']);
};