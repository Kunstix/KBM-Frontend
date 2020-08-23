import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowBigViewTaskButton extends Component {
  render() {
    return (
      <Link
        className='btn btn-light pr-1 mr-3'
        to={`/tasks/${this.props.projectID}/${this.props.sequence}`}
      >
        <i className='fa far fa-eye pr-1' />
        To Task
      </Link>
    );
  }
}

export default ShowBigViewTaskButton;
