import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { showForPm } from '../../../utils/auth/role';
import { connect } from 'react-redux';

class UpdateProjectButton extends Component {
  render() {
    const showButton = showForPm(this.props.roles);
    return showButton ? (
      <Link
        className='icon-action fa fa-edit pr-1'
        to={`/updateProject/${this.props.projectID}`}
      ></Link>
    ) : null;
  }
}

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, null)(UpdateProjectButton);
