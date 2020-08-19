import React, { Component } from 'react';
import ShowBoardButton from '../buttons/ShowBoardButton';
import ShowStatsButton from '../buttons/ShowStatsButton';
import DeleteProjectButton from '../buttons/DeleteProjectButton';
import UpdateProjectButton from '../buttons/UpdateProjectButton';
import TricedDetailsRow from './TricedDetailsRow';

export default class ProjectViewHead extends Component {
  render() {
    const {
      projectID,
      projectName,
      description,
      startDate,
      endDate
    } = this.props.project;
    return (
      <div className='col-md-12 mb-3 h-100'>
        <h3 className='text-primary font-weight-bold mb-3'>
          Project #{projectID}
        </h3>
        <div className='banner d-flex justify-content-between align-items-center'>
          <h5 className='mb-0'>Details </h5>
          <ShowBoardButton projectID={projectID} />
          <ShowStatsButton projectID={projectID} />
          <UpdateProjectButton projectID={projectID} />
          <DeleteProjectButton projectID={projectID} />
        </div>
        <div className='col-md-12 mt-4'>
          <TricedDetailsRow
            firstTitle={'Title'}
            firstContent={projectName}
            secondTitle={'Description'}
            secondContent={description}
            thirdTitle={'Date'}
            thirdContent={
              <span>
                {`From: ${startDate ? startDate : 'n/a'}`}
                <br />
                {`To: ${endDate ? endDate : 'n/a'}`}{' '}
              </span>
            }
          />
        </div>
      </div>
    );
  }
}
