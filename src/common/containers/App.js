import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import classNames from 'classnames';

import * as LayoutActions from '../actions/layout';

import Header from '../components/Header';
import HomePage from '../containers/HomePage';

class App extends Component {

  constructor(props) {
    super(props);
 }

 render() {
   return (
      <div>
        <Header />
        {!this.props.children && <HomePage />}
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
