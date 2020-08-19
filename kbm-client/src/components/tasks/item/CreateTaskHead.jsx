import React, { Component } from 'react';

export default class CreateTaskHead extends Component {
  render() {
    const { projectID, sequence } = this.props;
    return (
      <div className='banner d-flex justify-content-between align-items-center mb-3 mt-4'>
        <h5 className='text-center mb-0'>
          {sequence ? `Edit ${sequence}` : `New Task for project ${projectID}`}
        </h5>
      </div>
    );
  }
}
