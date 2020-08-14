import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import DefaultHeader from './DefaultHeader';
import AuthenticatedHeader from './AuthenticatedHeader';

class Header extends Component {
  renderHeader() {
    const { validToken, user } = this.props.auth;
    return validToken && user ? (
      <AuthenticatedHeader
        fullname={user.fullname}
        logout={() => this.props.logout()}
      />
    ) : (
      <DefaultHeader />
    );
  }

  render() {
    return (
      <nav className='navbar navbar-expand-sm navbar-dark bg-primary mb-4 p-1'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            KBM
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#mobile-nav'
          >
            <span className='navbar-toggler-icon' />
          </button>
          {this.renderHeader()}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
