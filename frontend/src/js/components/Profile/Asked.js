import React,{Component} from 'react';
import Question from './Question'; 
import AppAPI from '../../utils/appAPI';

export default class Asked extends Component {


  constructor(props) {
    super(props);
    this.state = {
      'questions': [],
    };

    this.loadData();
  }

  render() {



    return (
      <div>
                    <table className="table table-hover ">
                        <tbody>                                     
                            {
                              this.state.questions.map((question, i)=>{
                                return <Question  question={question} key={i} />
                              })
                            }
                        </tbody> 
                    </table>

      </div>
    );
  }

  loadData(){
    var user_id = this.props.user_id;
    var self = this;

    AppAPI.get_user_questions(user_id).then((data)=>{

        self.setState({questions: data});
    });

  }
}
