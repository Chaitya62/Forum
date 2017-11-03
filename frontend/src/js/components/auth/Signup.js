import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import {Redirect} from 'react-router-dom';


const getAppState = ()=>{
	return{
		'isLoggedIn': AppStore.get('isLoggedIn'),
		'message': ''
	};
}




class Signup extends Component{
	constructor(props) {
		super(props);
		this.state = getAppState();
	}
	render() {

		if(this.state.isSignedUp){
			return (
				<div className="container">
				<center>
					<br/><br/><br/><br/><br/><br/>
					<p className="lead">Your account has been created successfully.</p>
				</center>
				</div>
			);
		}

		if(this.state.isLoggedIn){
			return <Redirect to="/" />
		}
		var message;
		if(this.state.message !== ''){
			message = (<div className="alert alert-danger" role="alert" style={{textAlign: 'left'}}>				
						<strong>Error:</strong>	{this.state.message}
						</div>);

		}

		return(
			<div className="container-fluid">
			
			<div className="login signup">
			<center >
				<div  className="message col-xs-12 col-md-5 col-lg-5 col-sm-12">{message}</div>
			</center>
			<div className="container">
				

				<center className="">
					

					<form className="form col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<h3 className="text-center">Sign Up</h3>
						<div className="form-group">
							<input className="form-control" ref="username" type = "text" name = "username" placeholder = "Enter Username" />	
						</div>
						<div className="form-group" >
							<input className="form-control" ref="email" type = "email" name = "email" placeholder = "Enter Email Address"  />
						</div>
						<div className="form-group" >
							<input className="form-control" ref="password" type = "password" name = "password" placeholder = "Enter Password" />
						</div>
						<div className="form-group" >
							<input className="form-control" ref="cpassword" type = "password" name = "cpassword" placeholder = "Confirm Password" />
						</div>
						<div className="form-group" >
							<input className="form-control"  onClick={this.onClickHandler.bind(this)} name = "submit" value="Sign Up" type="submit" />
						</div>
					</form>
				</center>
			</div>
			</div>

		</div>

		)
	}

	onClickHandler(e){
		e.preventDefault();
		var username = this.refs.username;
		var password = this.refs.password;
		var cpassword = this.refs.cpassword;
		var email = this.refs.email;
		var message = '';
		if(cpassword.value != password.value){

			message = 'passwords do not match';
			this.setState({'message':message});
			return true;
		}

		if(username.value.trim() == ''){
			message = 'username cannot be empty';
			this.setState({'message':message});
			return true;
		}
		if(email.value.trim() == ''){
			console.log('here');
			message = 'email cannot be empty';
			this.setState( {'message' : message} );
			return true;
		}

		var self = this;
		AppAPI.createUser(username, password, email).then((data)=>{
			if(data){
				console.log(data);
				AppActions.signup(data);
				this.setState({'isSignedUp': data});
			}else{
				alert('Signup Failed');
			}
		})
		
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default Signup;