import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { username, fullname, active, roles } = this.props.user;
    const { isManage } = this.props;
    return (
      <tr>
        <td>{fullname}</td>
        <td>{username}</td>
        <td>{active ? 'yes' : 'no'}</td>
        <td>{roles[0].name}</td>
        {isManage && (
          <td>
            <a className='far fa-eye'></a>
            <a className='pl-2 fas fa-minus-circle'></a>
            <a className='pl-2 fas fa-trash-alt'></a>
          </td>
        )}
      </tr>
    );
  }
}

export default UserItem;
