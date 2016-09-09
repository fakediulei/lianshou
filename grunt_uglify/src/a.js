module.exports=function(grunt){
	//Project configuration.
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			buildall:{
				files:[{
					expand:true,
					cwd:'src',//js目录下
					src:'**/*.js',//所有js文件
					dest:'build'//输出到此目录下					
				}]
			}
		}
	});
	//加载包含"uglify"任务的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//默认被执行的任务列表
	grunt.registerTask('default',['uglify:buildall']);
};
