import React, { Component } from 'react';
import TaskOverviewTableHead from './TaskOverviewTableHead';
import TaskOverviewTableBody from './TaskOverviewTableBody';

export default class TaskOverviewTable extends Component {
  render() {
    const { tasks, simple } = this.props;
    return (
      <table
        className='table table-striped table-sm'
        cellSpacing='0'
        width='100%'
      >
        <TaskOverviewTableHead simple={simple} />
        <TaskOverviewTableBody tasks={tasks} simple={simple} />
      </table>
    );
  }
}
