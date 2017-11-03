import {Dispatcher} from 'flux';

class AppDispatcher extends Dispatcher{
	 handleViewAction(action){
		const payload = {
			source: 'VIEW_ACTION',
			action: action
		};

		this.dispatch(payload);
	}
}

let appDispatcher = new AppDispatcher();

export default appDispatcher;