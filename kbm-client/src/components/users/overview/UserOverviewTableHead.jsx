import React, { Component } from 'react';

export default class UserOverviewTableHead extends Component {
  render() {
    const { isManage, simple } = this.props;
    return (
      <thead>
        <tr>
          <th className='th-sm'>Name</th>
          <th className='th-sm'>Email</th>
          {!simple && <th className='th-sm'>Active</th>}
          <th className='th-sm'>Role</th>
          {isManage && <th className='th-sm'>Actions</th>}
          {!isManage && <th className='th-sm'></th>}
        </tr>
      </thead>
    );
  }
}
