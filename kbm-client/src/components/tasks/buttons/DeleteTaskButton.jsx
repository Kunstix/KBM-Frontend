import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTask } from '../../../actions/backlogActions';
import { dontShowForWatcher } from '../../../utils/auth/role';

class DeleteTaskButton extends Component {
  onDelete = (projectID, sequence, callback) => {
    this.props.deleteTask(projectID, sequence, callback);
  };

  render() {
    const showButton = dontShowForWatcher(this.props.roles);
    return showButton ? (
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
    ) : null;
  }
}

DeleteTaskButton.proptTypes = {
  deleteTask: ProptTypes.func.isRequired,
  sequence: ProptTypes.object.isRequired
};

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, { deleteTask })(DeleteTaskButton);
