import React,{Component} from 'react';




class Loader extends Component{
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			
				<div className="row">
					    <div id="loading">
			                <ul className="bokeh">
			                    <li></li>
			                    <li></li>
			                    <li></li>
			                </ul>
			            </div>
				</div>
			
		)
	}

	

	_onChange(){
		this.setState(getAppState());
	}
}

export default Loader;