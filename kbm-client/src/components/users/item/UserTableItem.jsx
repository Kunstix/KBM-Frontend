import React, { Component } from 'react';
import classNames from 'classnames';
import RemoveUserButton from '../buttons/RemoveUserButton';

class UserTableItem extends Component {
  onActivate = active => {
    if (!active) {
      this.props.onActivate();
    } else {
      this.props.onDeactivate();
    }
  };

  render() {
    const { username, fullname, active, roles } = this.props.user;
    const { isManage, simple, onDelete, onRemove } = this.props;
    return (
      <tr>
        <td>{fullname}</td>
        <td>{username}</td>
        {!simple && (
          <td>
            {active ? (
              <i className='fas fa-check'></i>
            ) : (
              <i className='fas fa-times'></i>
            )}
          </td>
        )}
        <td>{roles[0].name.replace('ROLE_', '')}</td>
        {isManage && (
          <td>
            <div className='far fa-eye table-action '></div>
            <div
              className={classNames('pl-2 table-action ', {
                'fas fa-minus-circle': active,
                'fas fa-check': !active
              })}
              onClick={() => this.onActivate(active)}
            />
            <div
              className='pl-2 fas fa-trash-alt table-action '
              onClick={() => onDelete()}
            />
          </td>
        )}
        <RemoveUserButton isManage={isManage} onRemove={onRemove} />
      </tr>
    );
  }
}

export default UserTableItem;
