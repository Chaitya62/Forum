import React, {Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import {Route} from 'react-router-dom';
import Feeds from './Feeds/Feeds';
import Question from './Questions/Question';
import Login from './auth/Login';
import Logout from './auth/Logout';
import Signup from './auth/Signup';

class AppRoutes extends Component {

  constructor(props) {
    super(props);
  }

  render() {

   return (
    <div>
      <Route exact path='/' component={Feeds} /> 
      <Route  path='/questions' component={Question}/>
      <Route path='/login' component = {Login} />
      <Route path='/logout' component = {Logout} />
      <Route path='/signup' component = {Signup} />
    </div>
  );
  }
}



export default AppRoutes;
