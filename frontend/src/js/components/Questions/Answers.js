import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import AnswerList from './AnswerList';
import Loader from '../Loader';
import AppAPI from '../../utils/appAPI';





class Answers extends Component{
	constructor(props) {
		super(props);
		this.state = {
			'isLoading': false,
			'answers': [],
			'dummy': null,
		};
		this.loadData();
	}
	
	render() {

		var {isLoading, answers} = this.state;


		if(isLoading){
			return  <Loader />
		} 
	
		return(
			<div className="container-fluid">

				<AnswerList answers={this.state.answers} reload={this.props.reload}  />
				
			</div>
		)
	}


	loadData(){
		var questionId = AppStore.get('questionId');
		var user_id = AppStore.get('user_id');
		var self = this;

		AppAPI.get_answers(questionId, user_id).then((data)=>{
			console.log('data : ',data);
			data.filter((a,b)=>{
				return a.upvotes > b.upvotes});
			self.setState({'isLoading':false, 'answers': data});
			return true;
		});


	}



	_onChange(){
		this.setState(getAppState());
	}
}

export default Answers;