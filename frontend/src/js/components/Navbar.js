import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import {NavLink} from 'react-router-dom';






class Navbar extends Component{
	constructor(props) {
		super(props);
		
	}
	render() {

		var isLoggedIn = AppStore.get('isLoggedIn');
		console.log(this.state);

		var log,profile,signup,ask;
		if(isLoggedIn){
			log = <NavLink className="nav-link" to="/logout"> Log Out </NavLink>
			profile = <NavLink className="nav-link" to="/profile">My Profile</NavLink>
			ask = <NavLink className = "nav-link" to="/ask">Ask</NavLink>
		}else{
			log = <NavLink className="nav-link" to="/login"> Log In </NavLink>
			signup = <NavLink className="nav-link" to="/signup"> Signup </NavLink>
			profile = null;
			ask = null;
		}


		return(
			<div >
				<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
				  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <NavLink className="navbar-brand" to="/">Sawaal</NavLink>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				       {
				       	ask
				       } 
				       </li>
				      <li className="nav-item">
				        { profile }
				      </li>
				   
				    
				    </ul>

				    <div className="navbar-left my-2 my-lg-0">
				    	{
				    		log
				    	}
				    </div>
				    <div className="navbar-left my-2 my-lg-0">
				    	{
				    		signup
				    	}
				    </div>

				   
				  </div>
				</nav>
			
			</div>
		)
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default Navbar;