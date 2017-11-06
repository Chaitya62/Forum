import React,{Component} from 'react';

export default class Details extends Component {
  

  constructor(props) {
    super(props);
  }

  render() {

  	var {username, email, answers, questions, upvotes} = this.props;


    return (
      <div>
      	<h5 className="mb-3">{username}</h5>
        <div className="row">
            <div className="col-md-6">
                <h6>About</h6>
                <p>
                    Wubba Lubba Dub Dub
                </p>
                <h6>Email</h6>
                <p>
                    {email}
                </p>
            </div>
            <div className="col-md-6">
              	<hr />
                <span className="badge badge-primary"><i className="fa fa-thumbs-up"></i> {upvotes} Likes</span>
                <span className="badge badge-success"><i className="fa fa-question"></i> {questions} questions</span>
                <span className="badge badge-danger"><i className="fa fa-font"></i> {answers} answers</span>
            </div>
                   
                    </div>
      </div>
    );
  }
}
