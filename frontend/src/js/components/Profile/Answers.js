import React,{Component} from 'react';
import Answer from './Answer';
import AppAPI from '../../utils/appAPI';

export default class Answered extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'answers':[],
    }

    this.loadData();
  }

  render() {
    return (
      <div>
      	<table className="table table-hover">
                <tbody>                                     
                    {
                      this.state.answers.map((answer, i)=>{
                        return <Answer  answer={answer} key={i} />
                      })

                    }
                </tbody> 
         </table>
      </div>
    );
  }

  loadData(){
    var user_id = this.props.user_id;

    AppAPI.get_user_answers(user_id).then((data)=>{
      this.setState({'answers': data});
    });
  }
}
