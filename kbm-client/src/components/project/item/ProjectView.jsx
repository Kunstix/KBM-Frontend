import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBacklog } from '../../../actions/backlogActions';
import { getUsersByProject } from '../../../actions/projectActions';
import { getProject } from '../../../actions/projectActions';
import PropTypes from 'prop-types';
import TaskOverviewTable from '../../tasks/overview/TaskOverviewTable';
import UserOverview from '../../users/overview/UserOverview';
import ProjectViewHead from './ProjectViewHead';
import AssignUserButton from '../../tasks/buttons/AssignUserButton';

class ProjectView extends Component {
  componentDidMount() {
    const { projectID } = this.props.match.params;
    this.props.getBacklog(projectID);
    this.props.getUsersByProject(projectID);
    this.props.getProject(projectID);
  }

  render() {
    const { tasks, users } = this.props;
    return (
      <div className='container h-75 pl-4 pr-4'>
        <div className='row h-50'>
          <ProjectViewHead project={this.props.project} />
        </div>
        <div className='row h-50'>
          <div className='col-md-8 h-100'>
            <h6 className='banner'>Tickets for this project </h6>
            <div className='h-100 overflow-auto pt-4'>
              <TaskOverviewTable tasks={tasks} simple />
            </div>
          </div>
          <div className='col-md-4 h-100'>
            <div className='banner d-flex justify-content-between'>
              <h6>Assigned Personell </h6>
              <AssignUserButton projectID={this.props.project.projectID} />
            </div>
            <div className='h-100 overflow-auto pt-4'>
              <UserOverview
                users={users}
                projectID={this.props.project.projectID}
                simple
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectView.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  getUsersByProject: PropTypes.func.isRequired,
  getProject: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tasks: state.backlog.tasks,
  users: state.project.users,
  project: state.project.project
});

export default connect(mapStateToProps, {
  getBacklog,
  getUsersByProject,
  getProject
})(ProjectView);
