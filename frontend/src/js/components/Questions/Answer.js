import React,{Component} from 'react';

export default class Answer extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    	'upvotes': parseInt(Math.random()*100),
    	'isLiked': (parseInt(Math.random()*100))%2,
    };
  }

  render() {

  	var username = "Username"
  	var answer = "This is a dummy answer to dummy question"
  	var {upvotes, isLiked} =  this.state;
  	var liked = "btn-like fa fa-thumbs-up fa-2x ";
  	liked += (isLiked ? 'active' : '' );

    return (
      <div className="container-fluid">
      	<div className="card">
		  <div className="card-block">
		  <div className="row">
		  	<div className="col-xs-8 col-md-8 col-lg-8 col-sm-8">
		    <h3 className="card-title">{username}</h3>
		  </div>
		  <div className="col-xs-4 col-md-4 col-lg-4 col-sm-4 text-right">
		  	<span className="badge badge-info">{upvotes} upvotes</span>
		  </div>
		  </div>
		    <p className="card-text">{answer}</p>
		    <button className={liked} onClick={this.onClickHandler.bind(this)}></button>
		  </div>
		</div>	

      </div>
    );
  }

  handleLike(){
  	var {upvotes, isLiked} = this.state;
  	if(isLiked){
  		this.setState({upvotes : upvotes-1, isLiked: false});
  	}else{
  		this.setState({upvotes: upvotes+1, isLiked: true});
  	}
  	return true;
  }

  onClickHandler(e){

  	this.handleLike();
  	// do magic that will upvote the answer;
  	// upvote in ui if not 
  	// on failure notify that upvote failed
  }

}

