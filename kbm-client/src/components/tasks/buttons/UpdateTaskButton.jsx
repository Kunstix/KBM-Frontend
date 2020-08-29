import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dontShowForWatcher } from '../../../utils/auth/role';

class UpdateTaskButton extends Component {
  render() {
    const { projectID, sequence, banner = false, roles } = this.props;
    const showButton = dontShowForWatcher(roles);
    return showButton ? (
      <Link
        className={`fa fa-edit pl-1 ${banner ? 'icon-action' : ''}`}
        to={`/updateTask/${projectID}/${sequence}`}
      ></Link>
    ) : null;
  }
}

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, null)(UpdateTaskButton);
