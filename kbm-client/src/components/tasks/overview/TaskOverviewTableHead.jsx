import React, { Component } from 'react';

class TaskOverviewTableHead extends Component {
  render() {
    const { simple = false } = this.props;
    return (
      <thead>
        <tr>
          <th scope='col'>ID</th>
          <th className='d-none d-sm-table-cell' scope='col'>
            Title
          </th>
          {!simple && (
            <th className='d-none d-sm-table-cell' scope='col'>
              Project
            </th>
          )}
          <th className='d-none d-md-table-cell' scope='col'>
            Assigned
          </th>
          <th scope='col'>Prio</th>
          <th scope='col'>Status</th>
          <th scope='col'>Type</th>
          {!simple && (
            <th className='d-none d-lg-table-cell' scope='col'>
              Created
            </th>
          )}
          {!simple && (
            <th className='d-none d-lg-table-cell' scope='col'>
              Due
            </th>
          )}
          <th className='d-none d-sm-table-cell' scope='col'>
            {simple ? 'View' : 'Actions'}
          </th>
        </tr>
      </thead>
    );
  }
}

export default TaskOverviewTableHead;
