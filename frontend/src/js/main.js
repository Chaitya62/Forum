import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import AppAPI from './utils/appAPI';
import {HashRouter, Route, Redirect} from 'react-router-dom';

AppAPI.get_data("http://localhost/forum", null, 'GET', function(data, err){
	if(err) console.log("There was an error ");
	console.log(data);
	console.log("Hello, World!");
});

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
	document.getElementById('app')
);