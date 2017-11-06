import React,{Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import AppActions from '../../actions/AppActions';

export default class Question extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      'redirect': false,
    };
  }

  render() {

    if(this.state.redirect){
      return <Redirect  to="/questions"  />
    }

    console.log(this.props);
    return (
      
      	<tr>
            <td onClick={this.onClickHandler.bind(this)}>
              {this.props.question.question_header}
            </td>
        </tr>
    
    );
  }

 
  onClickHandler(e){
      e.preventDefault(); 
      var questionId = this.props.question.id;
      console.log('question :',questionId);
      AppActions.viewQuestion(questionId);
      //this.changePath();
      this.setState({redirect: true});

  }
}
