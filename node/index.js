var _class=require('./class');
exports.add=function(_classes){
	_classes.forEach(function(item,index){
		var teacher=item.teacherName;
		var student=item.student;
		_class.add(teacher,student);
	});
}
