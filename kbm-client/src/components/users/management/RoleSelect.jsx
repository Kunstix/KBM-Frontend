import React, { Component } from 'react';

export default class RoleSelect extends Component {
  render() {
    const { users, role, onChange } = this.props;
    return (
      <div className='wrapper'>
        <h6 className='banner'>Select Role to assign: </h6>
        <select
          name='role'
          value={role}
          onChange={event => onChange(event)}
          className='form-control form-control-md'
        >
          {users.roles &&
            users.roles.map(role => (
              <option key={role.id} value={`${role.name}`}>
                {role.name}
              </option>
            ))}
        </select>
      </div>
    );
  }
}
