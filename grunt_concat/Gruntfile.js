module.exports=function(grunt){
	grunt.initConfig({
		concat: {
		    options: {
		      separator: ';',
		    },
		    dist: {
		      src: ['src/a.js', 'src/b.js', 'src/c.js'],
		      dest: 'dist/built.js',
		    },
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default',['concat']);
}
