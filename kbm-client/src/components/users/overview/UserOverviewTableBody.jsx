import React, { Component } from 'react';
import UserTableItem from '../../users/item/UserTableItem';

export default class UserOverviewTableBody extends Component {
  render() {
    const { users, isManage, simple } = this.props;
    return (
      <tbody>
        {users &&
          users.map(user => (
            <UserTableItem
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
    );
  }
}
