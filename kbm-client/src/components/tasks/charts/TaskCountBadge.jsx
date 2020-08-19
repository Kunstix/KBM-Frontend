import React, { Component } from 'react';

export default class TaskCountBadge extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <h1
        className='badge badge-info m-auto text-center'
        style={{ fontSize: '50px' }}
      >
        {tasks.length}
      </h1>
    );
  }
}
