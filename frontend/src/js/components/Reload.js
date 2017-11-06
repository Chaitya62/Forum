import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Reload extends React.Component {
 

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Redirect to="questions/" />
    );
  }
}
