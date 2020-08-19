import React, { Component } from 'react';

export default class TaskProgressBar extends Component {
  render() {
    const { tasks } = this.props;
    const notDoneTasks = tasks.filter(task => task.status !== 'DONE');
    return (
      <div className='bg-white text-primary mb-0 p-5'>
        <h2>Tickets Left: {notDoneTasks.length}</h2>
        <div className='progress' style={{ height: '40px' }}>
          <div
            className='progress-bar progress-bar-striped progress-bar-animated bg-success'
            role='progressbar'
            style={{
              width: `${
                (100 / tasks.length) * (tasks.length - notDoneTasks.length)
              }%`
            }}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          >
            25%
          </div>
        </div>
      </div>
    );
  }
}
