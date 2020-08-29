import React, { Component } from 'react';
import './menu.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Role } from '../../utils/auth/role';

class Sidebar extends Component {
  render() {
    const { pathname } = this.props.history.location;
    const { username, roles } = this.props;
    if (pathname === '/' || pathname === '/login' || pathname === '/register') {
      return null;
    } else {
      return (
        <nav id='sidebar' className='navbar-dark bg-primary vh-100 text-white'>
          <div className='sidebar-header'>
            <h4>Welcome, </h4>
            <h4>{`${username}`}</h4>
          </div>
          <ul className='list-unstyled components navbar-nav border-top border-info'>
            <li className='nav-item'>
              <Link className='nav-link' to='/dashboard'>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/myprojects'>
                My Projects
              </Link>
            </li>
            {roles.indexOf(Role.WATCHER) === -1 && (
              <li className='nav-item'>
                <Link className='nav-link' to='/mytasks'>
                  My Tickets
                </Link>
              </li>
            )}
            {roles.indexOf(Role.ADMIN) !== -1 && (
              <li className='nav-item'>
                <Link className='nav-link' to='/users'>
                  Manage Users
                </Link>
              </li>
            )}
          </ul>
        </nav>
      );
    }
  }
}

const mapStateToProps = state => ({
  username: state.auth.user.fullname,
  roles: state.auth.user.roles
});

export default withRouter(connect(mapStateToProps, {})(Sidebar));
