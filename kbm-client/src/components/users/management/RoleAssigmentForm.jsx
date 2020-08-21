import React, { Component } from 'react';
import UserSelect from './UserSelect';
import RoleSelect from './RoleSelect';
import AssignRoleButton from '../buttons/AssignRoleButton';

export default class RoleAssigmentForm extends Component {
  render() {
    const { users, username, role, errors, onChange, onSubmit } = this.props;
    return (
      <form
        className='d-flex flex-column align-items-stretch justify-content-between w-75 h-100'
        onSubmit={event => onSubmit(event)}
      >
        <h3 className='text-primary font-weight-bold'>Manage Users</h3>
        <UserSelect
          users={users}
          username={username}
          errors={errors}
          onChange={event => onChange(event)}
        />
        <RoleSelect
          users={users}
          role={role}
          onChange={event => onChange(event)}
        />

        <AssignRoleButton />
      </form>
    );
  }
}
