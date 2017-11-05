import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants  from '../constants/AppConstants';
import  appAPI from '../utils/appAPI';
import  {EventEmitter} from  'events';


const CHANGE_EVENT = 'change';

let _store ={
	'test': 'stuff',
	'questionId': '',
	'inQuestion': false,
	'isLoggedIn': false,
	'user_id': null,
	'feeds': [],
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

	set(data){
		console.log('here is it');
		console.log(data);
		_store = data;
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


		case AppConstants.SET_FEEDS:
			AppStore.change('feeds',action.data);
			console.log("here");
			console.log(action.data);
			break;


		case AppConstants.USER_LOGIN:
			AppStore.change('isLoggedIn', true);
			AppStore.change('user_id', action.data.user_id);
			break;

		case AppConstants.USER_LOGOUT:
			AppStore.change('isLoggedIn', action.data);
			AppStore.change('user_id', null);
			break;
		
		case AppConstants.CACHE_STORE:
			AppStore.set(action.data);
			break;
		/*
	
		Handle all the actions here
	
		*/
			
	}
	AppStore.emitChange();
	appAPI.cache_store(_store);
	return true;
});




export default AppStore;

