import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>
          <nav>
            <img src="/beers/home.png" alt="Home icon" />
          </nav>
        </Link>
      </div>
    );
  }
}
