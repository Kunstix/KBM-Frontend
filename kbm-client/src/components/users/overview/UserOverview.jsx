import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  deleteUser,
  activateUser,
  deactivateUser
} from '../../../actions/userActions';
import UserOverviewTableHead from './UserOverviewTableHead';
import UserOverviewTableBody from './UserOverviewTableBody';

class UserOverview extends Component {
  render() {
    const { users, isManage = false, simple = false } = this.props;
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
        />
      </table>
    );
  }
}

UserOverview.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  activateUser: PropTypes.func.isRequired,
  deactivateUser: PropTypes.func.isRequired
};

export default connect(null, { deleteUser, activateUser, deactivateUser })(
  UserOverview
);
