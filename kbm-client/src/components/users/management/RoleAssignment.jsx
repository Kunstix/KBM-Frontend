import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { assignRole } from '../../../actions/userActions';
import { withRouter } from 'react-router-dom';

class RoleAssignment extends Component {
  constructor() {
    super();
    this.state = {
      role: 'ROLE_WATCHER',
      username: '',
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.assignRole(
      this.state.username,
      this.state.role,
      this.props.history
    );
  }

  renderUserSelect() {
    const { users } = this.props.users;
    const { errors } = this.props;

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
          value={this.state.username}
          onChange={event => this.onChange(event)}
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

  renderRoleSelect() {
    const { users } = this.props;
    return (
      <div className='wrapper'>
        <h6 className='banner'>Select Role to assign: </h6>
        <select
          name='role'
          value={this.state.role}
          onChange={event => this.onChange(event)}
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

  render() {
    return (
      <div className='d-flex justify-content-center h-100'>
        <form
          className='d-flex flex-column align-items-stretch justify-content-between w-75 h-100'
          onSubmit={event => this.onSubmit(event)}
        >
          <h3 className='text-primary font-weight-bold'>Manage Users</h3>
          {this.renderUserSelect()}
          {this.renderRoleSelect()}

          <input
            type='submit'
            className='btn btn-info btn-block'
            value='Assign Role'
          />
        </form>
      </div>
    );
  }
}

RoleAssignment.propTypes = {
  assignRole: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default withRouter(
  connect(mapStateToProps, { assignRole })(RoleAssignment)
);
