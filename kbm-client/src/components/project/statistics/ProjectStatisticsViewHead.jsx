import React, { Component } from 'react';
import ShowBigBoardButton from '../buttons/ShowBigBoardButton';
import ShowBigProjectButton from '../buttons/ShowBigProjectButton';

export default class ProjectsViewHead extends Component {
  render() {
    const { projectID } = this.props;
    return (
      <div className='d-flex justify-content-between align-items-center pr-3'>
        <h3 className='text-primary font-weight-bold'>
          Statisics of {projectID}
        </h3>
        <div>
          <ShowBigProjectButton projectID={projectID} />
          <ShowBigBoardButton projectID={projectID} />
        </div>
      </div>
    );
  }
}
