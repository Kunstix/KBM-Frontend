import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AssignTaskButton extends Component {
  render() {
    const { projectID, sequence } = this.props;
    return (
      <Link
        className='icon-action fas fa-user-edit pl-1'
        to={`/updateTask/${projectID}/${sequence}`}
      ></Link>
    );
  }
}
