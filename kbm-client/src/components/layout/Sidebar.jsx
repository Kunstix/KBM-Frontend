import React, { Component } from 'react';
import './menu.css';
import { Link, withRouter } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    const { pathname } = this.props.history.location;
    if (pathname === '/' || pathname === '/login' || pathname === '/register') {
      return null;
    } else {
      return (
        <nav id='sidebar' className='navbar-dark bg-primary vh-100 text-white'>
          <div className='sidebar-header d-flex justify-content-between'>
            <h4>Welcome, XXX</h4>
          </div>
          <ul className='list-unstyled components navbar-nav border-top border-info'>
            <li className='nav-item'>
              <Link className='nav-link' to='/myprojects'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/myprojects'>
                My Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/mytasks'>
                My Tickets
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/users'>
                Manage Users
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

export default withRouter(Sidebar);
