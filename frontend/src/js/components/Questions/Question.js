import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';





class Question extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<div className="container-fluid">

				
			</div>
		)
	}


	_onChange(){
		this.setState(getAppState());
	}
}

export default Question;