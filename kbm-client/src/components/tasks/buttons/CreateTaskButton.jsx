import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dontShowForWatcher } from '../../../utils/auth/role';

class CreateTaskButton extends Component {
  render() {
    const { projectID, roles } = this.props;
    const showButton = dontShowForWatcher(roles);
    return showButton ? (
      <Link to={`/createTask/${projectID}`} className='btn btn-light mr-3'>
        <span className='fas fa-plus-circle pr-1' />
        <span> Create Task</span>
      </Link>
    ) : null;
  }
}

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, null)(CreateTaskButton);
