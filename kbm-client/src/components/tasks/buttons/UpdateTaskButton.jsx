import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UpdateTaskButton extends Component {
  render() {
    const { projectID, sequence, banner = false } = this.props;
    return (
      <Link
        className={`fa fa-edit pl-1 ${banner ? 'icon-action' : ''}`}
        to={`/updateTask/${projectID}/${sequence}`}
      ></Link>
    );
  }
}
