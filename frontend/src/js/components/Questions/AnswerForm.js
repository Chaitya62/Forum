import React,{Component} from 'react';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import {Redirect} from 'react-router-dom';
import Loader from '../Loader';
import AppActions from '../../actions/AppActions';

export default class AnswerForm extends Component {

  constructor(props) {
    super(props);
    this.state={
    	'username' : AppStore.get('username'),
      'reload': false,
      'isLoading': false,
      'clicked': false,
    	
    
    };
  }




  render() {

    if(this.state.reload){
      return <Redirect to="/reload" />
    }

  		if(this.props.hasAnswered){
  			return null;
  		}

      if(this.state.isLoading){
        return <Loader />
      }

      

  	  var {username} =  this.state;
  	  var liked="btn btn-success right-align";
    return (
      <div className="container-fluid">
      	<div className="card">
		  <div className="card-block">
		    <h3 className="card-title">{username}</h3>
		    
		    	<form className="">
		    		<div className="form-group">
		    			<p className="card-text">
		    				<textarea ref="answer" className="form-control" placeholder="Enter your answer" cols="20" rows="10">
		    					
		    				</textarea>
		    			</p>	
		    		</div>
		    		<div className="form-group">
		    			  <button className={liked} onClick={this.onClickHandler.bind(this)}>Submit</button>
		    		</div>
		    		
		    	</form>
		    
		  
		  </div>
      </div>
      </div>
    );
  }


  onClickHandler(e){
    if(this.clicked){
      return false;
    }
    this.setState({'clicked': true});
  	e.preventDefault();
  	console.log('answered');
  	var questionId = AppStore.get('questionId');
  	var userId = AppStore.get('user_id');
  	var answer = this.refs.answer.value;

    if(answer.trim() === ''){
      alert('Cannot submit empty answer');
      this.setState({'clicked': false});
      return false; 
    }

    var self = this;

    // this.setState({'isLoading': true});

  	AppAPI.answer(questionId, userId, answer).then((data)=>{
  		console.log(data);
      self.setState({reload: true});
       AppActions.reload();
       // self.setState({'isLoading': false});
  	});


    
    
   


  }

}
