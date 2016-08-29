var con=document.getElementById('example');
var data=['这是第1个选项','这是第2个选项','这是第3个选项','这是第4个选项','这是第5个选项','这是第6个选项','这是第7个选项']
var DropDown = React.createClass({
	getInitialState:function(){
		return{
			showList:false,
			displayState:'none',
			defaultText:'默认文字'
		}
	},
	handleClick:function(){
		this.setState({
			showList:!this.state.showList,
			displayState:this.state.showList?"block":"none"
		});
	},
	handleDefaultTxt:function(e){
		this.setState({
			defaultText:e
		});
	},
	render:function(){
		return(
			<div className="dropdownWrap">
				<DefaultText defaultText={this.state.defaultText}/>
				<span className="after" onClick={this.handleClick}></span>
				<Ul show={this.state.displayState} data={data} defTxt={this.state.defaultText} handleTxt={this.handleDefaultTxt}/>
			</div>
		);
	}
});
var Ul = React.createClass({
	render:function(){
		var list=this.props.data.map(function(content){
			return (<Li handleClick={this.props.handleTxt(content)}  defTxt={this.props.defTxt}>{content}</Li>);
		});
		return(
			<ul className="dropdownList" style={{"display":this.props.show}}>	
				{list}
			</ul>
		);
	}
});
var Li = React.createClass({
	handleClick:function(e){
		//e.target.innerHTML
		
		console.log(e);
	},
	render:function(){
		return(
			<li onClick={this.props.handleClick}>{this.props.children}</li>
		);
	}
});
var DefaultText=React.createClass({	
	render:function(){
		return(
			<span className="defaultText">{this.props.defaultText}</span>
		);
	}
});
React.render(
	<DropDown/>
	,
	con
);

