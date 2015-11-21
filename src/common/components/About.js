import React, { Component } from 'react';

class About extends Component {

   render() {
console.log(this.props);
    const { incrementCounter, decrementCounter, counter } = this.props;
    return (
      <div>
        <h1>About</h1>
        Counter: {counter}<br />
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
    );
  }
}

export default About;
