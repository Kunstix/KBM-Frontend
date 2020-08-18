import React, { Component } from 'react';
import DeleteTaskButton from '../buttons/DeleteTaskButton';
import ViewTaskButton from '../buttons/ViewTaskButton';
import PriorityButton from '../buttons/PriorityButton';
import TypeButton from '../buttons/TypeButton';

class Task extends Component {
  render() {
    const { sequence, priority, summary, type, projectID } = this.props.task;
    let priorityClass;
    switch (priority) {
      case 'LOWEST':
        priorityClass = '-light';
        break;
      case 'LOW':
        priorityClass = '-success';
        break;
      case 'MEDIUM':
        priorityClass = '-info';
        break;
      case 'HIGH':
        priorityClass = '-danger';
        break;
      case 'HIGHEST':
        priorityClass = '-danger';
        break;
      default:
        priorityClass = '-info';
    }
    return (
      <div className={`card mb-1 text-primary`}>
        <div
          className={`card-header bg-dark p-2 d-flex justify-content-between align-items-center`}
        >
          <TypeButton type={type} />
          {sequence}
          <span className={`badge badge${priorityClass}`}>{priority}</span>
        </div>
        <div className='card-body p-2 pb-0 d-flex justify-content-between align-items-center'>
          <h6 className='card-title'>{summary}</h6>
          <ViewTaskButton projectID={projectID} sequence={sequence} />
        </div>
      </div>
    );
  }
}

export default Task;
