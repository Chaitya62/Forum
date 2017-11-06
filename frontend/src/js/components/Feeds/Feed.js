import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import {NavLink,Router} from 'react-router-dom';



class Feed extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log(this.props);
		let feed  = this.props.feed;
		let profileLink ="/profile"+feed.user_id;
		return(
			<div onClick={this.handleClick.bind(this)} className="feed-item card">
				 
				  <div className="card-block">
				    <h4 className="card-title">{feed.question}</h4>
				    <p className="card-text">
				    	{feed.summary}
				    </p>
				    <span>Asked by {feed.user}</span>
				    <br />
				    <span className="badge badge-success">{feed.answers} answers</span>
				    &nbsp;
				    
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