import React,{Component} from 'react';

export default class AnswerForm extends Component {

  constructor(props) {
    super(props);
  }




  render() {
  	  var username ="currentUser";
  	  var liked="btn btn-success right-align";
    return (
      <div className="container-fluid">
      	<div className="card">
		  <div className="card-block">
		    <h3 className="card-title">{username}</h3>
		    
		    	<form className="">
		    		<div className="form-group">
		    			<p className="card-text">
		    				<textarea className="form-control" placeholder="Enter your answer" cols="20" rows="10">
		    					
		    				</textarea>
		    			</p>	
		    		</div>
		    		<div className="form-group">
		    			  <button className={liked} onClick={this.onClickHandler.bind(this)}>Submit</button>
		    		</div>
		    		
		    	</form>
		    
		  
		  </div>
      </div>
      </div>
    );
  }


  onClickHandler(e){
  	console.log('answered');
  }

}
