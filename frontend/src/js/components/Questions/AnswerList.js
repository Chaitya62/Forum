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
    var {answers} = this.props;
    var userId = AppStore.get('user_id');
    var hasAnswered = false;
    for(var i = 0;i<answers.length;i++){
      if(userId == answers[i].user_id){
        hasAnswered = true;
        break;
      }
    }
    var answerForm = (isLoggedIn ?  <AnswerForm hasAnswered={hasAnswered} /> : null);
    return (
      <div>
        {answerForm}
      	{
          answers.map((answer, i)=>{
            return <Answer answer={answer} key={i} />
          })



        }
      	
      </div>
    );
  }
}

export default AnswerList;