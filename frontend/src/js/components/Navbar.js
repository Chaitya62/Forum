import React,{Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';





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
				  <a className="navbar-brand" href="#">Sawaal</a>

				  <div className="collapse navbar-collapse" id="navbarSupportedContent">
				    <ul className="navbar-nav mr-auto">
				      <li className="nav-item active">
				        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link" href="#">My Profile</a>
				      </li>
				   
				    
				    </ul>

				    <div className="navbar-left my-2 my-lg-0">
				    	<a className="nav-link" href="#">
				    		Log In
				    	</a>
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