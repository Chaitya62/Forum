import React,{Component} from 'react';
import Answer from './Answer';
import AnswerForm from './AnswerForm';
import AppStore from '../../stores/AppStore';


export class AnswerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'isLoggedIn': AppStore.get('isLoggedIn'),
    };
  }

  render() {
    var {isLoggedIn} = this.state;
    var answerForm = (isLoggedIn ?  <AnswerForm/> : null);
    return (
      <div>
        {answerForm}
      	<Answer />
      	<Answer />
      	<Answer />
      	<Answer />
      	<Answer />
      	
      </div>
    );
  }
}

export default AnswerList;