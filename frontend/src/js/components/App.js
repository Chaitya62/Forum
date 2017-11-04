import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import Navbar from './Navbar';
import AppRoutes from './AppRoutes';
import {Redirect} from 'react-router-dom';


const getAppState = ()=>{
	return{
		feeds: AppStore.get('feeds'),
		inQuestion: AppStore.get('inQuestion'),
		'isLoggedIn': AppStore.get('isLoggedIn')
	};
}


class App extends Component{
	constructor(props) {
		
		super(props);
		this.state= getAppState();
	}
	componentDidMount() {
		AppStore.addChangeListener(this._onChange.bind(this));
	}
	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange.bind(this));
	}
	render() {
		console.log(this.state);
		console.log('refresh');
		return(
			<div>
				<Navbar  />
				<AppRoutes {...this.state} {...this.props} /> 
				
			
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default App;