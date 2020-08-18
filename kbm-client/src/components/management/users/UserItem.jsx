import React, { Component } from 'react';
import classNames from 'classnames';

class UserItem extends Component {
  onActivate = active => {
    if (!active) {
      this.props.onActivate();
    } else {
      this.props.onDeactivate();
    }
  };

  render() {
    const { username, fullname, active, roles } = this.props.user;
    const { isManage } = this.props;
    return (
      <tr>
        <td>{fullname}</td>
        <td>{username}</td>
        <td>
          {active ? (
            <i className='fas fa-check'></i>
          ) : (
            <i className='fas fa-times'></i>
          )}
        </td>
        <td>{roles[0].name}</td>
        {isManage && (
          <td>
            <a className='far fa-eye'></a>
            <a
              className={classNames('pl-2 ', {
                'fas fa-minus-circle': active,
                'fas fa-check': !active
              })}
              onClick={() => this.onActivate(active)}
            ></a>
            <a
              className='pl-2 fas fa-trash-alt'
              onClick={() => this.props.onDelete()}
            ></a>
          </td>
        )}
      </tr>
    );
  }
}

export default UserItem;
