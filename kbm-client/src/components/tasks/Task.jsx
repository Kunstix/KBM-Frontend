import React, { Component } from 'react';

class Task extends Component {
  render() {
    console.log('woop', this.props);
    const { sequence, priority, summary, acceptanceCriteria } = this.props.task;
    return (
      <div className='card mb-1 bg-light'>
        <div className='card-header text-primary p-2'>
          {sequence}({priority})
        </div>
        <div className='card-body bg-light p-2 pb-0'>
          <h6 className='card-title'>{summary}</h6>
          <p className='card-text text-truncate '>{acceptanceCriteria}</p>
          <div className='d-flex justify-content-between'>
            <a href='#' className='btn btn-sm btn-primary'>
              View
            </a>
            <button className='btn btn-danger btn-sm ml-1'>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
