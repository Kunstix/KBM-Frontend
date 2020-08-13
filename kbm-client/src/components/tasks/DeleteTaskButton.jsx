import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../../actions/backlogActions';

class DeleteTaskButton extends Component {
  onDelete = (projectID, sequence) => {
    this.props.deleteTask(projectID, sequence);
  };

  render() {
    return (
      <button
        className='btn btn-danger btn-sm ml-1'
        onClick={() => this.onDelete(this.props.projectID, this.props.sequence)}
      >
        <span>Delete</span>
      </button>
    );
  }
}

DeleteTaskButton.proptTypes = {
  deleteTask: ProptTypes.func.isRequired,
  sequence: ProptTypes.object.isRequired
};

export default connect(null, { deleteTask })(DeleteTaskButton);
