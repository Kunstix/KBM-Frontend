import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItem from '../item/UserTableItem';
import { connect } from 'react-redux';
import {
  deleteUser,
  activateUser,
  deactivateUser
} from '../../../actions/userActions';

class UserOverview extends Component {
  render() {
    const { users, isManage = false, simple = false } = this.props;
    return (
      <table
        className='table table-striped table-sm'
        cellSpacing='0'
        width='100%'
      >
        <thead>
          <tr>
            <th className='th-sm'>Name</th>
            <th className='th-sm'>Email</th>
            {!simple && <th className='th-sm'>Active</th>}
            <th className='th-sm'>Role</th>
            {isManage && <th className='th-sm'>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map(user => (
              <UserItem
                key={user.id}
                user={user}
                isManage={isManage}
                simple={simple}
                onDelete={() => this.props.deleteUser(user.username)}
                onActivate={() =>
                  this.props.activateUser(user.username, user.active)
                }
                onDeactivate={() => this.props.deactivateUser(user.username)}
              />
            ))}
        </tbody>
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
