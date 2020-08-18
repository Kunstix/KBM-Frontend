import React, { Component } from 'react';

class TaskOverviewHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th className='d-none d-sm-table-cell' scope='col'>
            Title
          </th>
          <th className='d-none d-sm-table-cell' scope='col'>
            Project
          </th>
          <th className='d-none d-md-table-cell' scope='col'>
            Assigned
          </th>
          <th scope='col'>Prio</th>
          <th scope='col'>Status</th>
          <th scope='col'>Type</th>
          <th className='d-none d-lg-table-cell' scope='col'>
            Created
          </th>
          <th className='d-none d-lg-table-cell' scope='col'>
            Due
          </th>
          <th className='d-none d-sm-table-cell' scope='col'>
            Actions
          </th>
        </tr>
      </thead>
    );
  }
}

export default TaskOverviewHead;
