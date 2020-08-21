import React, { Component } from 'react';
import classNames from 'classnames';

export default class UserSelect extends Component {
  render() {
    const { users } = this.props.users;
    const { errors, onChange, username } = this.props;

    return (
      <div className='list-group'>
        <h6 className='banner'>Select User: </h6>
        <select
          name='username'
          className={classNames('custom-select form-control form-control-md', {
            'is-invalid': errors.message
          })}
          size='5'
          style={{ height: '20vh' }}
          value={username}
          onChange={event => onChange(event)}
        >
          {users &&
            users.map(user => (
              <option key={user.id} value={user.username}>
                {user.fullname}
              </option>
            ))}
        </select>
        {errors.message && (
          <div className='invalid-feedback'>{errors.message}</div>
        )}
      </div>
    );
  }
}
