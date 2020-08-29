import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SecuredRoute = ({ component: Component, roles, auth, ...otherProps }) => (
  <Route
    {...otherProps}
    render={props => {
      if (auth.validToken === true) {
        if (roles && !roles.some(role => auth.user.roles.indexOf(role) >= 0)) {
          return <Redirect to={{ pathname: '/dashboard' }} />;
        } else {
          return <Component {...props} />;
        }
      } else {
        return <Redirect to='/login' />;
      }
    }}
  />
);

SecuredRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(SecuredRoute);
