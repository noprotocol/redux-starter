import React, { Component, PropTypes } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.props;
    let incrementCounter = this.props.actions.counterActions.incrementCounter;
    let decrementCounter = this.props.actions.counterActions.decrementCounter;
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
