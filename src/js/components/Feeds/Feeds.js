import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import FeedList from './FeedList';




class Feeds extends Component{
	constructor(props) {
		super(props);
		this.state = {
			'feeds': AppStore.get('feeds'),
		}
	}
	
	render() {
		console.log(this.props);
		return(
			<div className="container-fluid">
				<div className="row">
				<div className="col-xs-12 col-lg-10 col-sm-12 col-md-12">
				<FeedList {...this.state}  changePath={this.changePath.bind(this)}/>
				</div>
				</div>
			</div>

		)
	}

	changePath(){
		this.props.history.push("/questions");
		return;
	}

	_onChange(){
		this.setState(getAppState());
	}
}

export default Feeds;