import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants  from '../constants/AppConstants';
import  appAPI from '../utils/appAPI';
import  {EventEmitter} from  'events';


const CHANGE_EVENT = 'change';

let _store ={
	'test': 'stuff',
	'questionId': '',
	'inQuestion': false,
	'feeds': [
		{
			"question": "What is this ? ",
			"user": "Chaitya Shah",
			"likes": "102",
			"upvotes": "10",
			"views": "12",
			"answers": "2",
			"summary": "Hello, World  ipLorem ipsum dolor sit amet, consectetur adipisicing elit. Error id officiis culpa, molestiae, molestias rerum totam esse tenetur. Illo dolorum consectetur, aliquid alias fugiat quidem quae possimus ad perferendis culpa."
		},
		{
			"question": "What is this ? ",
			"user": "Chaitya Shah",
			"likes": "102",
			"upvotes": "10",
			"views": "12",
			"answers": "2",
			"summary": "Hello, World  ipLorem ipsum dolor sit amet, consectetur adipisicing elit. Error id officiis culpa, molestiae, molestias rerum totam esse tenetur. Illo dolorum consectetur, aliquid alias fugiat quidem quae possimus ad perferendis culpa."
		},
		{
			"question": "What is this ? ",
			"user": "Chaitya Shah",
			"likes": "102",
			"upvotes": "10",
			"views": "12",
			"answers": "2",
			"summary": "Hello, World  ipLorem ipsum dolor sit amet, consectetur adipisicing elit. Error id officiis culpa, molestiae, molestias rerum totam esse tenetur. Illo dolorum consectetur, aliquid alias fugiat quidem quae possimus ad perferendis culpa."
		},
		{
			"question": "What is this ? ",
			"user": "Chaitya Shah",
			"likes": "102",
			"upvotes": "10",
			"views": "12",
			"answers": "2",
			"summary": "Hello, World  ipLorem ipsum dolor sit amet, consectetur adipisicing elit. Error id officiis culpa, molestiae, molestias rerum totam esse tenetur. Illo dolorum consectetur, aliquid alias fugiat quidem quae possimus ad perferendis culpa."
		},
		],
};

class AppStoreClass extends EventEmitter{
		
	emitChange(){
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback){
		this.on(CHANGE_EVENT,callback);
	}

	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT,callback);
	}

	appendToStore(name, value){
		if(typeof _store[name].push == 'undefined'){
			throw "Can append to Arrays only";
		}
		_store[name].push(value)
	}

	/* Use to change value */

	change(name,value){
		_store[name] = value;
	}

	/*Use to get value of a paricular field from  app state */

	get(name){
	  return _store[name];
	}
}

let AppStore = new AppStoreClass();

AppDispatcher.register((payload)=>{
	const action = payload.action;

	switch(action.actionType){


		case AppConstants.TESTING:
			AppStore.appendToStore('feeds', {"question": action.test});
			break;


		case AppConstants.VIEW_QUESTION:
			AppStore.change('questionId', action.id);
			AppStore.change('inQuestion', true);
			break;
		/*
	
		Handle all the actions here
	
		*/
			
	}
	AppStore.emitChange();
	return true;
});




export default AppStore;

