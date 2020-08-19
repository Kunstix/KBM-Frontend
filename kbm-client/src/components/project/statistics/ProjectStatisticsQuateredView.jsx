import React, { Component } from 'react';
import TaskTypePieChart from '../../tasks/charts/TaskTypePieChart';
import TaskStatusBarChart from '../../tasks/charts/TaskStatusBarChart';
import TaskPriorityBarChart from '../../tasks/charts/TaskPriorityBarChart';
import TaskProgressBar from '../../tasks/charts/TaskProgressBar';

export default class ProjectStatisticsQuateredView extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className='h-100 p-0 d-flex justify-content-center align-items-center'>
        <div className='row w-75 h-100 mr-0'>
          <div className='col-md-6 d-flex flex-column border-right'>
            <h6 className='banner d-inline-block'>Tasks by Status: </h6>
            <TaskStatusBarChart tasks={tasks} />
            <hr />
            <h6 className='banner'>Tasks by Type: </h6>
            <TaskTypePieChart tasks={tasks} />
          </div>
          <div className='col-md-6 d-flex flex-column'>
            <h6 className='banner'>Tasks by Priority: </h6>
            <TaskPriorityBarChart tasks={tasks} />
            <hr />
            <h6 className='banner'>Progress: </h6>
            <TaskProgressBar tasks={tasks} />
          </div>
        </div>
      </div>
    );
  }
}
