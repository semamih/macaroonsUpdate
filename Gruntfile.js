module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            all: {
                src: './src/styles/*.less',
                dest: './dist/style.min.css',
                options: {
                    compress: true
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['./src/styles/*.less'],
                tasks: ['less'],
            },
        },


    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // grunt.registerTask('default', ['less'])
};