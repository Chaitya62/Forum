import React,{Component} from 'react';
import Question from './Question';

export default class Asked extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
                    <table className="table table-hover table-striped">
                        <tbody>                                     
                            <Question />
                        </tbody> 
                    </table>

      </div>
    );
  }
}
