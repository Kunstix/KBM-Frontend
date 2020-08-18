import React, { Component } from 'react';
import UpdateProjectButton from '../buttons/UpdateProjectButton';
import DeleteProjectButton from '../buttons/DeleteProjectButton';
import ShowProjectButton from '../buttons/ShowProjectButton';
import ShowBoardButton from '../buttons/ShowBoardButton';

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <li class='list-group-item container' id='project'>
        <div className='row h-100'>
          <div className='col-md-2'>
            <span className='mx-auto'>{project.projectID}</span>
          </div>
          <div className='col-md-5'>
            <h4>{project.projectName}</h4>
          </div>
          <div className='col-md-5 d-flex w-100 justify-content-around align-items-center'>
            <ShowProjectButton projectID={project.projectID} />
            <ShowBoardButton projectID={project.projectID} />
            <UpdateProjectButton projectID={project.projectID} />
            <DeleteProjectButton projectID={project.projectID} />
          </div>
        </div>
      </li>
    );
  }
}

export default ProjectItem;
