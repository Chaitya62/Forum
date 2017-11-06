import React,{Component} from 'react';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import Avatar from './Avatar';
import Asked from './Asked';
import Answers from './Answers';
import Details from './Details';
import Loader from '../Loader';

export default class Profile extends Component {
  


  constructor(props) {
    super(props);
    var user_id = AppAPI.getParameterByName('user');
    this.state = {
      'user_id':user_id,
      'isLoading': true,
      'user': {},
    };
    this.loadData();
  }

  render() {

  	console.log(this.props);
  	var url = this.props.location.search;
    var {user_id, isLoading} = this.state;

  	if(user_id == null){
  		return (<div className="container text-center">
  			<br/><br/><br/><br/><br/><br/><br/><br/>
  			<h3 className="lead strong mt-6" >Broken URL</h3>

  		</div>)
  	} 


    if(isLoading){
      return <Loader />
    }

  	

    return (
      <div className="container-fluid mt-5" >
    		<div className="container-fluid mt-5">
        <div className="row my-2">
         <div className="col-lg-4 order-lg-1 text-center">
                <Avatar user={this.state.user}/>
            </div>
            <div className="col-lg-8 order-lg-2">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="" data-target="#profile" data-toggle="tab" className="nav-link active">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a href="" data-target="#asked" data-toggle="tab" className="nav-link">Asked</a>
                    </li>
                    <li className="nav-item">
                        <a href="" data-target="#answers" data-toggle="tab" className="nav-link">Answers</a>
                    </li>
                </ul>
                <div className="tab-content py-4">
                    <div className="tab-pane active" id="profile">
                       <Details {...this.state.user}/>
            
                    </div>
                    <div className="tab-pane" id="asked">
                        <Asked  user_id={this.state.user_id}/>
                    </div>
                    <div className="tab-pane" id="answers">
                        <Answers user_id={this.state.user_id} />
                    </div>
                </div>
            </div>
           
        </div>
        </div>
    </div>      
    );
  }


  loadData(){
    var {user_id} = this.state;
    var self = this;

    AppAPI.userDetails(user_id).then((data)=>{
      console.log('here it is bitch', data);
        self.setState({isLoading: false, user: data});
    }).catch((err)=>{
     
      console.log(err);
    });
  }


}
