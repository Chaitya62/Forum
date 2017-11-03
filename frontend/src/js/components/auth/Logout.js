import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import {Redirect} from 'react-router-dom';





class Logout extends Component{
	constructor(props) {
		super(props);
		
	}
	render() {
		AppActions.logout();
		return (	
			<Redirect to='/' />
		);
	}

}

export default Logout;