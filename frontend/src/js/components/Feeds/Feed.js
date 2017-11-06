import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import {Router} from 'react-router-dom';



class Feed extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props);
		let feed  = this.props.feed;
		return(
			<div onClick={this.handleClick.bind(this)} className="feed-item card">
				 
				  <div className="card-block">
				    <h4 className="card-title">{feed.question}</h4>
				    <p className="card-text">
				    	{feed.summary}
				    </p>
				    <span className="badge badge-success">{feed.answers} answers</span>
				    &nbsp;
				    <span className="badge badge-info">{feed.views} views</span> 
				  </div>
				</div>
		)
	}

	handleClick(){

		//change later
		var questionId = this.props.feed.question_id; 
		AppActions.viewQuestion(questionId);
		this.props.changePath();

		return;
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default Feed;