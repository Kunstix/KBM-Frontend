import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateProjectButton extends Component {
  render() {
    return (
      <Link to={`/updateProject/${this.props.projectID}`}>
        <div className='btn btn-info w-100'>
          <span className='fa fa-edit pr-1' />
          <span>Update Info</span>
        </div>
      </Link>
    );
  }
}

export default UpdateProjectButton;
