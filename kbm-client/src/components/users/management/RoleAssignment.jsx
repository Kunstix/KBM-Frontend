import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { assignRole } from '../../../actions/userActions';
import { withRouter } from 'react-router-dom';
import RoleAssigmentForm from './RoleAssigmentForm';

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

  render() {
    const { users } = this.props;
    const { username, role, errors } = this.state;
    return (
      <div className='d-flex justify-content-center h-100'>
        <RoleAssigmentForm
          users={users}
          username={username}
          errors={errors}
          onChange={event => this.onChange(event)}
          onSubmit={event => this.onSubmit(event)}
          role={role}
        />
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
