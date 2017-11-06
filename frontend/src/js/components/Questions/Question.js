import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Answers from './Answers';
import AppAPI from '../../utils/appAPI';
import Loader from '../Loader';
import {NavLink} from 'react-router-dom';





class Question extends Component{
	constructor(props) {
		super(props);
		this.state = {
			'isLoading': true,
			'questionData': {},
		};
		this.loadData();
	}
	
	render() {
		
		var {isLoading, questionData}  = this.state;

		if(isLoading){
			return <Loader/>
		}

		console.log("current Question id: ",AppStore.get('questionId'));
 
		var question = questionData.question_header;
		var qDescription = questionData.description;
		var username = questionData.user;
		var profileLink = "/profile?user="+questionData.user_id;

		return(
			<div className="container-fluid">
				<div className="question-container">
					<div className="card">
					  <div className="card-block">
					    <h4 className="card-title strong">{question}</h4>
					    <h6 className="card-subtitle mb-2 text-muted">
					    	asked by <NavLink to={profileLink}> {username}</NavLink>
					    </h6>
					    <p className="card-text">{qDescription}</p>
					    <a href="#" className="card-link"></a>
					    
					  </div>
					</div>
				</div>
				
				<div className="answer">
					<Answers />
				</div>

			</div>
		)
	}


	loadData(){
		var questionId = AppStore.get('questionId');
		var self = this;
		AppAPI.get_question(questionId).then((data)=>{
			self.setState({'isLoading':false, 'questionData': data});
			return true;
		});

	}


	_onChange(){
		this.setState(getAppState());
	}
}

export default Question;