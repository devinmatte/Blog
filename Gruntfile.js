module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        htmlmin: {
            dist: {
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    src: './_site/**/*.html',
                    ext: '.html'
                }]
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            target: {
                files: [{
                    expand: true,
                    cwd: '_site/css',
                    src: ['*.css', '!*.min.css'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['htmlmin', 'cssmin']);

};