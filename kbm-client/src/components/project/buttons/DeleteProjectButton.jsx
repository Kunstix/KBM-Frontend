import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/projectActions';

class DeleteProjectButton extends Component {
  onDelete = projectID => {
    this.props.deleteProject(projectID);
  };

  render() {
    return (
      <div
        className='action fas fa-trash-alt pr-1'
        onClick={() => this.onDelete(this.props.projectID, this.props.callback)}
      />
    );
  }
}

DeleteProjectButton.proptTypes = {
  deleteProject: ProptTypes.func.isRequired,
  projectID: ProptTypes.object.isRequired
};

export default connect(null, { deleteProject })(DeleteProjectButton);
