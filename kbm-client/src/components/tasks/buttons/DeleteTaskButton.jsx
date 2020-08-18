import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../../../actions/backlogActions';

class DeleteTaskButton extends Component {
  onDelete = (projectID, sequence, callback) => {
    this.props.deleteTask(projectID, sequence, callback);
  };

  render() {
    return (
      <div
        className='icon-action fas fa-trash-alt pr-1'
        onClick={() =>
          this.onDelete(
            this.props.projectID,
            this.props.sequence,
            this.props.callback
          )
        }
      ></div>
    );
  }
}

DeleteTaskButton.proptTypes = {
  deleteTask: ProptTypes.func.isRequired,
  sequence: ProptTypes.object.isRequired
};

export default connect(null, { deleteTask })(DeleteTaskButton);
