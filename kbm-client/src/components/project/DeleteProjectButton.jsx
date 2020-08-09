import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../actions/projectActions';

class DeleteProjectButton extends Component {
  onDelete = projectID => {
    this.props.deleteProject(projectID);
  };

  render() {
    return (
      <div
        className='btn btn-danger w-100'
        onClick={() => this.onDelete(this.props.projectID)}
      >
        <span className='fa fa-minus-circle pr-1' />
        <span>Delete Project</span>
      </div>
    );
  }
}

DeleteProjectButton.proptTypes = {
  deleteProject: ProptTypes.func.isRequired,
  projectID: ProptTypes.object.isRequired
};

export default connect(null, { deleteProject })(DeleteProjectButton);
