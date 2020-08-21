import React, { Component } from 'react';
import ViewTaskButton from '../buttons/ViewTaskButton';
import TypeButton from '../buttons/TypeButton';
import PriorityBadge from '../buttons/PriorityBadge';

class Task extends Component {
  render() {
    const { sequence, priority, summary, type, projectID } = this.props.task;
    return (
      <div className={`card mb-1 text-primary`}>
        <div
          className={`card-header bg-dark p-2 d-flex justify-content-between align-items-center`}
        >
          <TypeButton type={type} />
          {sequence}
          <PriorityBadge priority={priority} />
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
