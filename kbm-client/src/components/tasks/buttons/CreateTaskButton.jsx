import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateTaskButton extends Component {
  render() {
    const { projectID } = this.props;
    return (
      <Link to={`/createTask/${projectID}`} className='btn btn-light mr-3'>
        <span className='fas fa-plus-circle pr-1' />
        <span> Create Task</span>
      </Link>
    );
  }
}
