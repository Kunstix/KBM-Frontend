import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/projectActions';

class ProjectItem extends Component {
  onDelete = projectID => {
    this.props.deleteProject(projectID);
  };

  render() {
    const { project } = this.props;
    return (
      <div className='container'>
        <div className='card card-body bg-secondary mb-3 rounded-0'>
          <div className='row'>
            <div className='col-2'>
              <span className='mx-auto'>{project.projectID}</span>
            </div>
            <div className='col-lg-6 col-md-4 col-8'>
              <h3>{project.projectName}</h3>
              <p>{project.description}</p>
            </div>
            <div className='col-md-4 d-none d-md-block'>
              <ul className='list-group'>
                <Link to={`/showProject/${project.projectID}`}>
                  <li className='list-group-item board'>
                    <span className='fa fa-flag-checkered pr-1 text-primary' />
                    <span className='text-primary'>Project Board</span>
                  </li>
                </Link>
                <Link to={`/updateProject/${project.projectID}`}>
                  <li className='list-group-item update'>
                    <span className='fa fa-edit pr-1 text-info' />
                    <span className='text-info'>Update Info</span>
                  </li>
                </Link>
                <li
                  className='list-group-item delete'
                  onClick={() => this.onDelete(project.projectID)}
                >
                  <span className='fa fa-minus-circle pr-1 text-danger' />
                  <span className='text-danger'>Delete Project</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectItem.proptTypes = {
  deleteProject: ProptTypes.func.isRequired
};

export default connect(null, { deleteProject })(ProjectItem);
