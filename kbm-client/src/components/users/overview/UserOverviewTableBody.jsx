import React, { Component } from 'react';
import UserTableItem from '../../users/item/UserTableItem';

export default class UserOverviewTableBody extends Component {
  render() {
    const {
      users,
      isManage,
      simple,
      onDelete,
      onActivate,
      onDeactivate,
      onRemove
    } = this.props;
    return (
      <tbody>
        {users &&
          users.map(user => (
            <UserTableItem
              key={user.id}
              user={user}
              isManage={isManage}
              simple={simple}
              onDelete={() => onDelete(user.username)}
              onActivate={() => onActivate(user.username, user.active)}
              onDeactivate={() => onDeactivate(user.username)}
              onRemove={() => onRemove(user)}
            />
          ))}
      </tbody>
    );
  }
}
