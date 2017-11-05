import React,{Component} from 'react';
import Answer from './Answer';


export class AnswerList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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