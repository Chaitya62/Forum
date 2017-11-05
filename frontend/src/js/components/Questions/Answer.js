import React,{Component} from 'react';

export default class Answer extends Component {
 
  constructor(props) {
    super(props);
  }

  render() {

  	var username = "Username"
  	var answer = "This is a dummy answer to dummy question"


    return (
      <div className="container-fluid">
      	<div className="card">
		  <div className="card-block">
		  <div className="row">
		  	<div className="col-xs-8 col-md-8 col-lg-8 col-sm-8">
		    <h3 className="card-title">{username}</h3>
		  </div>
		  <div className="col-xs-4 col-md-4 col-lg-4 col-sm-4 text-right">
		  	<span className="badge badge-info">10 upvotes</span>
		  </div>
		  </div>
		    <p className="card-text">{answer}</p>
		    <a href="#" className="btn btn-primary">upvote</a>
		  </div>
		</div>	

      </div>
    );
  }
}

