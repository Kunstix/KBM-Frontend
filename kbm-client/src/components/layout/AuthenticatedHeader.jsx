import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AuthenticatedHeader extends Component {
  render() {
    return (
      <div className='collapse navbar-collapse' id='mobile-nav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/dashboard'>
              <i className='fas fa-user-circle mr-1' />
              {this.props.fullname}
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/'
              onClick={() => this.props.logout()}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default AuthenticatedHeader;
