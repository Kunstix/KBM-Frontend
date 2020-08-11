import React, { Component } from 'react';
import Task from '../tasks/Task';

class Backlog extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-secondary text-white'>
                <h5>Todo</h5>
              </div>
            </div>
            {tasks && tasks.map(task => <Task key={task.id} task={task} />)}
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5>Design</h5>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-info text-white'>
                <h5>Progress</h5>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5>Review</h5>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-info text-white'>
                <h5>Test</h5>
              </div>
            </div>
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-success text-white'>
                <h5>Done</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;
