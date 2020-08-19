import React, { Component } from 'react';
import CreateTaskButton from '../tasks/buttons/CreateTaskButton';
import ShowBigProjectButton from '../project/buttons/ShowBigProjectButton';

export default class BoardHead extends Component {
  render() {
    const { projectID } = this.props;
    return (
      <div className='d-flex justify-content-between align-items-center pl-3 pr-3'>
        <h3 className='text-primary font-weight-bold'>Board of {projectID}</h3>
        <div>
          <CreateTaskButton projectID={projectID} />
          <ShowBigProjectButton projectID={projectID} />
        </div>
      </div>
    );
  }
}
