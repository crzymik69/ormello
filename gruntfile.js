module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jsdoc : {
            dist : {
                src: ['src/*.js', 'README.md'],
                options: {
                    destination: 'docs',
                    template : 'node_modules/ink-docstrap/template',
                    configure : 'conf.json',
                    readme: 'README.md'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc');

    grunt.registerTask('default', ['jsdoc']);
};