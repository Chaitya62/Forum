import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import {NavLink} from 'react-router-dom';





class Navbar extends Component{
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.state);
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
				        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
				      </li>
				      <li className="nav-item">
				        <NavLink className="nav-link" to="/profile">My Profile</NavLink>
				      </li>
				   
				    
				    </ul>

				    <div className="navbar-left my-2 my-lg-0">
				    	<NavLink className="nav-link" to="/login">
				    		Log In
				    	</NavLink>
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