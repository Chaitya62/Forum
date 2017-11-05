import React,{Component} from 'react';
import Answer from './Answer';
import AnswerForm from './AnswerForm';


export class AnswerList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<AnswerForm/>
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