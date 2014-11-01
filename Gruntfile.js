module.exports = function (grunt) {

    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    precision: 6,
                    sourcemap: 'none'
                },
                files: {
                    'dist/selectize.css': ['src/selectize.scss'],
                    'dist/selectize.default.css': ['src/selectize.default.scss']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

};