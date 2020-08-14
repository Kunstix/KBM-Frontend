import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DefaultHeader extends Component {
  render() {
    return (
      <div className='collapse navbar-collapse' id='mobile-nav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/register'>
              Sign Up
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Login
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default DefaultHeader;
