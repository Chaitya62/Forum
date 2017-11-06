import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import {Redirect} from 'react-router-dom';


const getAppState = ()=>{
	return{
		'isLoggedIn': AppStore.get('isLoggedIn')
	};
}




class Login extends Component{
	constructor(props) {
		super(props);
		this.state = getAppState();
	}
	render() {
		if(this.state.isLoggedIn){
			return <Redirect to="/" />
		}

		return(
			<div className="login">
			<div className="container">
				

				<center className="">

					<form className="form col-xs-12 col-sm-12 col-md-12 col-lg-4">
						<h3 className="text-center lead bold mb-4"><strong>Sawaal</strong></h3>
						<div className="form-group">
							<input className="form-control" ref="username" type = "text" name = "username" placeholder = "Enter Username" />	
						</div>
						<div className="form-group" >
							<input className="form-control" ref="password" type = "password" name = "password" placeholder = "Enter Password" />
						</div>
						<div className="form-group" >
							<input className="form-control"  onClick={this.onClickHandler.bind(this)} name = "submit" value="login" type="submit" />
						</div>
					</form>
				</center>
			</div>
			</div>
		)
	}

	onClickHandler(e){
		e.preventDefault();
		var username = this.refs.username;
		var password = this.refs.password;
		var self = this;
		AppAPI.authenticate(username, password).then((data)=>{
			if(data){
				AppActions.login(data);
				this.setState({'isLoggedIn': AppStore.get('isLoggedIn')});
				alert('Login Successful');
			}else{
				alert('Login Failed');
			}
		})
		
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default Login;