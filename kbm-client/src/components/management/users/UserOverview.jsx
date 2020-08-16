import React, { Component } from 'react';
import UserItem from './UserItem';

class UserOverview extends Component {
  render() {
    const { users } = this.props.users;
    const { isManage } = this.props;
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
            <th className='th-sm'>Active</th>
            <th className='th-sm'>Role</th>
            {isManage && <th className='th-sm'>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map(user => <UserItem key={user.id} user={user} isManage />)}
        </tbody>
      </table>
    );
  }
}

export default UserOverview;
