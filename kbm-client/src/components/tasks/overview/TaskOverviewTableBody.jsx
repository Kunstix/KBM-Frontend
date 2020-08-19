import React, { Component } from 'react';
import TaskItem from '../item/TaskTableItem';

export default class TaskOverviewTableBody extends Component {
  render() {
    const { tasks, simple } = this.props;
    return (
      <tbody>
        {tasks &&
          tasks.map(task => (
            <TaskItem key={task.id} task={task} simple={simple} />
          ))}
      </tbody>
    );
  }
}
