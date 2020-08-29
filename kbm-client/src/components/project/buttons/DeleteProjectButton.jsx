import React, { Component } from 'react';
import ProptTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/projectActions';
import { showForPm } from '../../../utils/auth/role';

class DeleteProjectButton extends Component {
  onDelete = projectID => {
    this.props.deleteProject(projectID);
  };

  render() {
    const showButton = showForPm(this.props.roles);
    return showButton ? (
      <div
        className='icon-action fas fa-trash-alt pr-1'
        onClick={() => this.onDelete(this.props.projectID, this.props.callback)}
      />
    ) : null;
  }
}

DeleteProjectButton.proptTypes = {
  deleteProject: ProptTypes.func.isRequired,
  projectID: ProptTypes.object.isRequired
};

const mapStateToProps = state => ({
  roles: state.auth.user.roles
});

export default connect(mapStateToProps, { deleteProject })(DeleteProjectButton);
