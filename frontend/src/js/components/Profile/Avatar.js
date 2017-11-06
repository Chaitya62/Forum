import React,{Component} from 'react';

export default class Avatar extends Component {
 
  constructor(props) {
    super(props);
    
  }

  render() {
  	
    var {user} = this.props;
    console.log('user ,', user);
    var username = user.username;
     
    return (
      <div className="container-fluid">
      	<img src="//placehold.it/150" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
            <h6 className="mt-4 lead">{username}</h6>
      </div>
    );
  }
}
