import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import AppActions from './actions/AppActions';
import AppAPI from './utils/appAPI';
import {HashRouter, Route, Redirect} from 'react-router-dom';

AppAPI.get_store().then((store)=>{
			console.log(store);
			AppActions.setStore(store);
			ReactDOM.render(
			  <HashRouter>
			    <App/>
			  </HashRouter>,
				document.getElementById('app')
			);
});


