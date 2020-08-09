import React, { Component } from 'react';
import UpdateProjectButton from './UpdateProjectButton';
import DeleteProjectButton from './DeleteProjectButton';
import ShowProjectButton from './ShowProjectButton';

class ProjectItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className='container'>
        <div
          className='card card-body mb-3 rounded-0 border-white'
          id='project'
        >
          <div className='row'>
            <div className='col-2'>
              <span className='mx-auto'>{project.projectID}</span>
            </div>
            <div className='col-lg-6 col-md-4 col-8'>
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>
            <div className='col-md-4 d-none d-md-block'>
              <ShowProjectButton projectID={project.projectID} />
              <UpdateProjectButton projectID={project.projectID} />
              <DeleteProjectButton projectID={project.projectID} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectItem;
