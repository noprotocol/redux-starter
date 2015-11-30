import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        &nbsp;/&nbsp;
        <Link to="/about">About</Link>
        &nbsp;/&nbsp;
        <Link to="/items">Async API Example</Link>
      </div>
    );
  }
};

export default Header;
