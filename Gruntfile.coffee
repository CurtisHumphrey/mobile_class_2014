module.exports = (grunt) ->
  # Livereload and connect variables
  LIVERELOAD_PORT = 35729
  lrSnippet = require("connect-livereload")(port: LIVERELOAD_PORT)
  mountFolder = (connect, dir) ->
    connect.static require("path").resolve(dir)

  grunt.initConfig
    connect:
      dev:
        options:
          port: 9001
          hostname: 'localhost',
          middleware: ( connect ) ->
            [lrSnippet, mountFolder(connect, '.')]

    open:
      test:
        path: 'http://localhost:<%= connect.dev.options.port %>/index.html'

    less:
      dev:
        options:
          sourceMap: true
          sourceMapFilename: 'style/app.css.map'
          sourceMapBasepath: 'style/'
        files:
          'style/app.css': 'style/app.less'


    coffee:
      compile_app: 
        expand : true
        cwd     : 'code/coffee'
        src    : ['**/*.coffee']
        dest   : 'code/js'
        ext    : '.js'

    watch:
      less:
        files: ['style/**/*.less']
        tasks: ['less:dev']
        options:
          livereload: true
      coffee_app:
        files: ['code/coffee/**/*.coffee']
        tasks: ['newer:coffee:compile_app']
        options:
          livereload: true
      views:
        files: ['ko_templates/**/*.html','index.html']
        options:
          livereload: true

  require('time-grunt')(grunt)

  require('load-grunt-tasks')(grunt)
  
  grunt.registerTask 'dev', ['coffee','less','connect:dev:livereload', 'open:test', 'watch']
  grunt.registerTask 'default', ['dev']