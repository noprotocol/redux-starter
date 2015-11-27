import React, { Component, PropTypes } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.homeActions.fetchItemsIfNeeded();
  }

  render() {
    const { incrementCounter, decrementCounter, counter, items } = this.props;
    return (
      <div>
        <h1>Homepage</h1>
        Counter: {counter}<br />
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
        <h2>Items</h2>
        <ul>
        {items.map(function(item) {
          return <li>{item.title}</li>
        })}
        </ul>
      </div>
    );
  }
};

export default Home;
