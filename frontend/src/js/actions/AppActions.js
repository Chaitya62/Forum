import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants  from '../constants/AppConstants';



class AppActions{
	
	 
	static example(test){
		AppDispatcher.handleViewAction({
		 	actionType: AppConstants.TESTING,
		 	test: test
		});
	}
	
	static viewQuestion(id){
		AppDispatcher.handleViewAction({
		 	actionType: AppConstants.VIEW_QUESTION,
		 	id: id
		});
	}

	static setFeeds(data){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SET_FEEDS,
			data: data
		})
	}
	
		
}

export default AppActions;