var con=document.getElementById('example');
var RichText = React.createClass({
	render:function(){
		return <div ref="editableDiv" contentEditable="true" onKeyDown={this.handleKeyDown}></div>;
	},
	handleKeyDown:function(){
		var editor = this.refs.editableDiv.getDOMNode();
		var html = editor.innerHTML;
		console.log(html);
	}
});
React.render(
	<RichText/>
	,
	con
);

