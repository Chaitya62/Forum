import React,{Component} from 'react';
import Answer from './Answer';

export default class Answered extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<table className="table table-hover table-striped">
                <tbody>                                     
                    <Answer />
                </tbody> 
         </table>
      </div>
    );
  }
}
