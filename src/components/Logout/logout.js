/**
* Libraries
*/

import React,{
  Component
} from 'react';
 
import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
  Redirect
} from 'react-router-dom';

/**
* Actions
*/

import * as Actions from '../../actions';
 
/**
* Styles
*/
 
import './logout.scss';

/**
* Logout component definition and export
*/

export class Logout extends Component {

  /**
  * Methods
  */

  componentDidMount() {
    this.props.onLogout();
  }
 
  /**
  * Markup
  */
 
  render() {
      return <Redirect to="/" />
  }

}

export default connect(
   (state) => {
       return {
        isAuthenticated: state.auth.token !== null
       };
    },
   (dispatch) => {
      return {
        onLogout: bindActionCreators(Actions.logout, dispatch)
      };
   }
)(Logout);
