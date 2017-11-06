import React,{Component} from 'react';

export default class Question extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      
      	<tr>
            <td>
               {this.props.question.question_header} 
            </td>
        </tr>
    
    );
  }
}
