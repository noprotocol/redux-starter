import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    let { items } = this.props;

    if(typeof items === 'undefined') {
      // items = [];
    }

    return (
      <div>
        {items.map((item, i) =>
          <div key={i}>{item.title}</div>
        )}
      </div>
    );
  }

};

export default Item;
