import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../components/Home';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
return {
    actions: {
      counterActions: bindActionCreators(CounterActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

