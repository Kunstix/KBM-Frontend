import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Task extends Component {
  render() {
    const {
      sequence,
      priority,
      summary,
      acceptanceCriteria,
      projectID
    } = this.props.task;
    let priorityClass;
    switch (priority) {
      case 'LOWEST':
        priorityClass = 'bg-light text-light';
        break;
      case 'LOW':
        priorityClass = 'bg-info text-light';
        break;
      case 'MEDIUM':
        priorityClass = 'bg-secondary text-light';
        break;
      case 'HIGH':
        priorityClass = 'bg-danger text-light';
        break;
      case 'HIGHEST':
        priorityClass = 'bg-danger text-light';
        break;
      default:
        priorityClass = 'bg-info text-light';
    }
    return (
      <div className='card mb-1 bg-light'>
        <div className={`card-header text-primary ${priorityClass} p-2`}>
          {sequence}({priority})
        </div>
        <div className='card-body bg-light p-2 pb-0'>
          <h6 className='card-title'>{summary}</h6>
          <p className='card-text text-truncate '>{acceptanceCriteria}</p>
          <div className='d-flex justify-content-between'>
            <Link
              to={`/updateTask/${projectID}/${sequence}`}
              className='btn btn-sm btn-primary'
            >
              View
            </Link>
            <button className='btn btn-danger btn-sm ml-1'>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
