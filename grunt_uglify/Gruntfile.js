module.exports=function(grunt){
	//Project configuration.
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			buildall:{//按原文件结构压缩js文件夹内所有JS文件
				files:[{
					expand:true,
					cwd:'src',//js目录下
					src:'**/*.js',//所有js文件
					dest:'build',//输出到此目录下	
					ext:'.min.js'//替换所有生成的目标文件后缀为这个属性
				}]
			},
			builda: {//压缩a.js，不混淆变量名，保留注释，添加banner和footer
                options: {
                    mangle: false, //不混淆变量名
                    preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
                },
                files: {
                    'build/a.min.js': ['src/a.js']
                }
     	  },
            buildb:{//压缩b.js，输出压缩信息
                options: {
                    report: "min"//输出压缩率，可选的值有 false(不输出信息)，gzip
                },
                files: {
                    'build/a.min.js': ['src/a.js']
                }
            },            
            release: {//：合并压缩下面数组路径里的所有代码 
                files: {
                    'build/index.min.js': ['src/*.js']
                }
            }
     	  
		}
	});
	//加载包含"uglify"任务的插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//默认被执行的任务列表
	grunt.registerTask('default',['uglify:release']);
};
