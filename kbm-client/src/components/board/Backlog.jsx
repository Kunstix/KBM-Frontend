import React, { Component } from 'react';
import Task from '../tasks/Task';
import _ from 'lodash';

class Backlog extends Component {
  render() {
    const { tasks } = this.props;
    const groupedTasks = _.chain(tasks).groupBy('status').value();

    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5 className='text-white'>Todo</h5>
              </div>
            </div>
            {groupedTasks['TODO'] &&
              groupedTasks['TODO'].map(task => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5 className='text-white'>Design</h5>
              </div>
            </div>
            {groupedTasks['IN_DESIGN'] &&
              groupedTasks['IN_DESIGN'].map(task => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5 className='text-white'>Progress</h5>
              </div>
            </div>
            {groupedTasks['IN_PROGRESS'] &&
              groupedTasks['IN_PROGRESS'].map(task => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5 className='text-white'>Review</h5>
              </div>
            </div>
            {groupedTasks['IN_REVIEW'] &&
              groupedTasks['IN_REVIEW'].map(task => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5 className='text-white'>Test</h5>
              </div>
            </div>
            {groupedTasks['IN_TEST'] &&
              groupedTasks['IN_TEST'].map(task => (
                <Task key={task.id} task={task} />
              ))}
          </div>
          <div className='col-sm-6 col-md-4 col-lg-2 pl-1 pr-1'>
            <div className='card text-center mb-2'>
              <div className='card-header bg-primary text-white'>
                <h5 className='text-white'>Done</h5>
              </div>
            </div>
            {groupedTasks['DONE'] &&
              groupedTasks['DONE'].map(task => (
                <Task key={task.id} task={task} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Backlog;
