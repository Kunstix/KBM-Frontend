import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateProjectButton extends Component {
  render() {
    return (
      <Link
        className='action fa fa-edit pr-1'
        to={`/updateProject/${this.props.projectID}`}
      ></Link>
    );
  }
}

export default UpdateProjectButton;
