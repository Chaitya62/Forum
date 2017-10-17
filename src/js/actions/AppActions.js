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
	
		
}

export default AppActions;