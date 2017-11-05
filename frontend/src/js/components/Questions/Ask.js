import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import {Redirect} from 'react-router-dom';





class Ask extends Component{
	constructor(props) {
		super(props);
		this.state = {
			message : '',
			'asked': false,
		};

	}
	
	render() {
		if(this.state.asked){
			return (<Redirect to="/" />);
		}
		var message = '';
		if(this.state.message !== ''){
			message = (<div className="alert alert-danger" role="alert" style={{textAlign: 'left'}}>				
						<strong>Error:</strong>	{this.state.message}
						</div>);
		}

		return(
			<div className="container-fluid">
				<center className="mt-4">
				<div  className="message col-xs-12 col-md-5 col-lg-5 col-sm-12">{message}</div>
			</center>
				<form className="ask card" >
				<div className="card-header">
					Ask your Question
				</div>
				<div className="card-body">
						<div className="form-group">
					<input className="form-control" ref="question-header" placeholder="Enter Question" />
				</div>
				<div className="form-group">
					<textarea ref="description" className="form-control" placeholder="Description" cols="20" rows="10"></textarea>
				</div>
				<div className="form-group">
					<input onClick={this.onClickHandler.bind(this)} className="col-xs-12 col-lg-2 col-md-2 col-sm-12 offset-10 form-control btn btn-success" value="submit" type="submit" />
				</div>		 	
				</div>
						
				</form>
				
			</div>
		)
	}

	onClickHandler(e){
		e.preventDefault();
		var questionHeader = this.refs['question-header'];
		var questionDescription = this.refs.description;
		var message = '';

		if(questionHeader.value.trim() == ''){
			message = 'question cannot be empty';
			this.setState({message : message});
			return true;
		}

		if(questionDescription.value.trim() == ''){
			message = 'Description cannot be empty';
			this.setState({message : message});
			return true;
		}

		var user_id = AppStore.get('user_id');

		AppAPI.ask(questionHeader, questionDescription, user_id).then((resp)=>{
			console.log(resp);
			if(resp.status == 'success'){
				this.setState({'asked': true});
			}
		})



	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default Ask;