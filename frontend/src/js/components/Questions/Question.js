import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Answers from './Answers';





class Question extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		console.log("current Question id: ",AppStore.get('questionId'));
 
		var question = 'This is a dummy question ?';
		var qDescription = 'this is a dummy description';
		var username = 'testuser';

		return(
			<div className="container-fluid">
				<div className="question-container">
					<div className="card">
					  <div className="card-block">
					    <h4 className="card-title strong">{question}</h4>
					    <h6 className="card-subtitle mb-2 text-muted">
					    	asked by {username}
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


	_onChange(){
		this.setState(getAppState());
	}
}

export default Question;