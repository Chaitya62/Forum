import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import AppAPI from './utils/appAPI';
import {HashRouter, Route, Redirect} from 'react-router-dom';



ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
	document.getElementById('app')
);