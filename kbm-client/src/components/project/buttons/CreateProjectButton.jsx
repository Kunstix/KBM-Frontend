import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showForPm } from '../../../utils/auth/role';

const CreateProjectButton = ({ roles }) => {
  console.log(roles);
  const showButton = showForPm(roles);
  return showButton ? (
    <React.Fragment>
      <Link to='/addProject' className='btn btn-md btn-primary'>
        Create a Project
      </Link>
    </React.Fragment>
  ) : null;
};

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, null)(CreateProjectButton);
