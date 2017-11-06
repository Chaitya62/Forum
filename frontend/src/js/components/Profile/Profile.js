import React,{Component} from 'react';
import AppStore from '../../stores/AppStore';
import AppAPI from '../../utils/appAPI';
import Avatar from './Avatar';
import Asked from './Asked';
import Answers from './Answers';
import Details from './Details';

export default class Profile extends Component {
  


  constructor(props) {
    super(props);
  }

  render() {

  	console.log(this.props);
  	var url = this.props.location.search;
  	var user_id = AppAPI.getParameterByName('user');

  	if(user_id == null){
  		return (<div className="container text-center">
  			<br/><br/><br/><br/><br/><br/><br/><br/>
  			<h3 className="lead strong mt-6" >Broken URL</h3>

  		</div>)
  	} 

  	

    return (
      <div className="container-fluid mt-5" >
		<div className="container-fluid mt-5">
    <div className="row my-2">
     <div className="col-lg-4 order-lg-1 text-center">
            <Avatar/>
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
                    <a href="" data-target="#edit" data-toggle="tab" className="nav-link">Edit</a>
                </li>
            </ul>
            <div className="tab-content py-4">
                <div className="tab-pane active" id="profile">
                   <Details username='Rick' upvotes="10" questions="10" answers="1" email='evilmorty@rickestrick.com'/>
        
                </div>
                <div className="tab-pane" id="asked">
                    <Asked />
                </div>
                <div className="tab-pane" id="edit">
                    <Answers />
                </div>
            </div>
        </div>
       
    </div>
    </div>
</div>      
    );
  }
}
