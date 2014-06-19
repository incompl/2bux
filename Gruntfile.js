module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['src/2bux.js']
    },

    uglify: {
      options: {
        banner: '/* <%= pkg.name %> <%= pkg.version %> */\n'
      },
      build: {
        src: 'src/2bux.js',
        dest: 'dest/2bux.min.js'
      }
    },

    nodeunit: {
      all: ['test/*.js'],
      options: {}
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('default', ['jshint', 'nodeunit', 'uglify']);
  grunt.registerTask('test', ['nodeunit']);

};
