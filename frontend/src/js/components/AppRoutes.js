import React, {Component} from 'react';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import {Route} from 'react-router-dom';
import Feeds from './Feeds/Feeds';
import Question from './Questions/Question';
import Login from './Login';


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
    </div>
  );
  }
}



export default AppRoutes;
