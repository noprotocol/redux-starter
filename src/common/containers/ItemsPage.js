import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Items from '../components/Items';
import * as ItemActions from '../actions/item';

Items.need = [
  ItemActions.fetchItems
];

function mapStateToProps(state) {
  let { items } = state;

  return {
    items: items.items
  };

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ItemActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);

