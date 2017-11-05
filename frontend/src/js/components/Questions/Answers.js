import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import AnswerList from './AnswerList';





class Answers extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {

	
		return(
			<div className="container-fluid">
				<AnswerList/ >
				
			</div>
		)
	}


	_onChange(){
		this.setState(getAppState());
	}
}

export default Answers;