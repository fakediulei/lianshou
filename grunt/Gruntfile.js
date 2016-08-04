module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {//代码压缩插件
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/*.js',
        dest: 'build/<%= grunt.template.today("yyyy-mm-dd") %>.min.js'
      }
    },
    jshint:{
    	all:['app/**/*.js'],
    	options:{
    		globals:{
    			$:false,
    			jQuery:false
    		},
    		browser:true,
    		devel:true
    	}
    }
  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // 默认被执行的任务列表。
  //grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default','myDefaultTask',function(){
  	grunt.log.write('myDefaultTask is running!!!').ok();
  });

};