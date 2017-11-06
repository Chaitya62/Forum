import React,{Component} from 'react';

export default class Avatar extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    	'username': 'test',
    };
  }

  render() {
  	var {username} = this.state;
    return (
      <div className="container-fluid">
      	<img src="//placehold.it/150" className="mx-auto img-fluid img-circle d-block" alt="avatar" />
            <h6 className="mt-4 lead">{username}</h6>
      </div>
    );
  }
}
