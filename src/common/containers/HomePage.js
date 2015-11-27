import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../components/Home';
import * as CounterActions from '../actions/counter';
import * as HomeActions from '../actions/home';

Home.need = [
  HomeActions.fetchItems
]

function mapStateToProps(state) {
  return {
    counter: state.counter,
    items: state.items.items
  };
}

function mapDispatchToProps(dispatch) {
return {
    actions: {
      homeActions: bindActionCreators(HomeActions, dispatch),
      counterActions: bindActionCreators(CounterActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

