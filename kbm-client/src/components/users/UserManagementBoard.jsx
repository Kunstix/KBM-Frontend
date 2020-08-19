import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, getRoles } from '../../actions/userActions';
import RoleAssignment from './management/RoleAssignment';
import UserOverview from './overview/UserOverview';

class UserManagementBoard extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getRoles();
  }

  render() {
    return (
      <div className='row pt-4 w-100 h-75'>
        <div className='col-sm-4'>
          <RoleAssignment users={this.props.users} />
        </div>
        <div className='col-sm-8 h-100 pb-5'>
          <div className='banner w-75 m-auto pl-3 pt-3'>
            <h5>Users Overview</h5>
            <small>All users in your Database.</small>
          </div>
          <div className='h-100 overflow-auto pt-4'>
            <UserOverview users={this.props.users.users} isManage={true} />
          </div>
        </div>
      </div>
    );
  }
}

UserManagementBoard.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { getUsers, getRoles })(
  UserManagementBoard
);
