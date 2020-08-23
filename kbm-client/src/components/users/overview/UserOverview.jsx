import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteUser,
  activateUser,
  deactivateUser
} from '../../../actions/userActions';
import { removeUserFromProject } from '../../../actions/projectActions';
import UserOverviewTableHead from './UserOverviewTableHead';
import UserOverviewTableBody from './UserOverviewTableBody';

class UserOverview extends Component {
  render() {
    const {
      users,
      isManage = false,
      simple = false,
      projectID,
      callback
    } = this.props;
    return (
      <table
        className='table table-striped table-sm'
        cellSpacing='0'
        width='100%'
      >
        <UserOverviewTableHead isManage={isManage} simple={simple} />
        <UserOverviewTableBody
          users={users}
          isManage={isManage}
          simple={simple}
          onDelete={username => this.props.deleteUser(username)}
          onActivate={username => this.props.activateUser(username)}
          onDeactivate={username => this.props.deactivateUser(username)}
          onRemove={user =>
            this.props.removeUserFromProject(projectID, user, callback)
          }
        />
      </table>
    );
  }
}

UserOverview.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired,
  removeUserFromProject: PropTypes.func.isRequired
};

export default connect(null, {
  deleteUser,
  activateUser,
  deactivateUser,
  removeUserFromProject
})(UserOverview);
