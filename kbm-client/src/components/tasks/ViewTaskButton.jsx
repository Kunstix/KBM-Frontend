import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewTaskButton extends Component {
  render() {
    return (
      <Link
        to={`/updateTask/${this.props.projectID}/${this.props.sequence}`}
        className='btn btn-sm btn-primary'
      >
        View
      </Link>
    );
  }
}

export default ViewTaskButton;
