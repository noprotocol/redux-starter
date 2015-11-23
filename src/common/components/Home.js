import React, { Component, PropTypes } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { incrementCounter, decrementCounter, counter } = this.props;
    return (
      <div>
        <h1>Homepage</h1>
        Counter: {counter}<br />
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
    );
  }
};

export default Home;
