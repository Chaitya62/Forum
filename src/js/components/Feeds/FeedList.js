import React,{Component} from 'react';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import Feed from './Feed';




class FeedList extends Component{
	constructor(props) {
		super(props);
		this.state = {
			feeds: this.props.feeds,
		}
	}
	
	render() {
		return(
			<div>
				{
					this.state.feeds.map((feed, i)=>{
						return <Feed feed={feed} key={i} changePath={this.props.changePath} />
					})
				}
			</div>
		)
	}

}

export default FeedList;