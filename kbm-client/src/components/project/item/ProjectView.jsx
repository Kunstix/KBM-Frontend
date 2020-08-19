import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBacklog } from '../../../actions/backlogActions';
import { getUsersByProject } from '../../../actions/userActions';
import { getProject } from '../../../actions/projectActions';
import PropTypes from 'prop-types';
import TaskOverviewTable from '../../tasks/overview/TaskOverviewTable';
import UserOverview from '../../users/overview/UserOverview';
import ShowBoardButton from '../buttons/ShowBoardButton';
import ShowStatsButton from '../buttons/ShowStatsButton';
import DeleteProjectButton from '../buttons/DeleteProjectButton';
import UpdateProjectButton from '../buttons/UpdateProjectButton';
import TricedDetailsRow from './TricedDetailsRow';

class ProjectView extends Component {
  componentDidMount() {
    this.props.getBacklog(this.props.match.params.projectID);
    this.props.getUsersByProject(this.props.match.params.projectID);
    this.props.getProject(this.props.match.params.projectID);
  }

  render() {
    const { tasks, users } = this.props;
    const {
      projectID,
      projectName,
      description,
      startDate,
      endDate
    } = this.props.project;
    console.log(this.props);
    return (
      <div className='container h-75 pl-4 pr-4'>
        <div className='row h-50'>
          <div className='col-md-12 mb-3 h-100'>
            <h3 className='text-primary font-weight-bold mb-3'>
              Project #{this.props.match.params.projectID}
            </h3>
            <div className='banner d-flex justify-content-between align-items-center'>
              <h5 className='mb-0'>Details </h5>
              <ShowBoardButton projectID={projectID} />
              <ShowStatsButton projectID={projectID} />
              <UpdateProjectButton projectID={projectID} />
              <DeleteProjectButton projectID={projectID} />
            </div>
            <div className='col-md-12 mt-4'>
              <TricedDetailsRow
                firstTitle={'Title'}
                firstContent={projectName}
                secondTitle={'Description'}
                secondContent={description}
                thirdTitle={'Date'}
                thirdContent={`${startDate ? startDate : 'n/a'} - ${
                  endDate ? endDate : 'n/a'
                }`}
              />
            </div>
          </div>
        </div>

        <div className='row h-50'>
          <div className='col-md-8 h-100'>
            <h6 className='banner'>Tickets for this project </h6>
            <div className='h-100 overflow-auto pt-4'>
              <TaskOverviewTable tasks={tasks} simple />
            </div>
          </div>
          <div className='col-md-4 h-100'>
            <h6 className='banner'>Assigned Personell </h6>
            <div className='h-100 overflow-auto pt-4'>
              <UserOverview users={users} simple />
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
  users: state.users.users,
  project: state.project.project
});

export default connect(mapStateToProps, {
  getBacklog,
  getUsersByProject,
  getProject
})(ProjectView);
