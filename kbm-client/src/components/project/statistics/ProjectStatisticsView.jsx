import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBacklog } from '../../../actions/backlogActions';

import _ from 'lodash';
import TaskTypePieChart from './TaskTypePieChart';
import TaskStatusBarChart from './TaskStatusBarChart';
import TaskPriorityBarChart from './TaskPriorityBarChart';
import TaskProgressBar from './TaskProgressBar';

class ProjectStatisticsView extends Component {
  componentDidMount() {
    const { projectID } = this.props.match.params;
    this.props.getBacklog(projectID);
  }

  render() {
    const { tasks } = this.props.backlog;
    return (
      <div className='h-75 pl-4'>
        <h3 className='text-primary font-weight-bold'>
          Statisics of {this.props.match.params.projectID}
        </h3>
        <div className='h-100 p-0 d-flex justify-content-center align-items-center'>
          <div className='row w-75 h-100 mr-0'>
            <div className='col-md-6 d-flex flex-column'>
              <TaskStatusBarChart tasks={tasks} />
              <hr />
              <TaskTypePieChart tasks={tasks} />
            </div>
            <div className='col-md-6 d-flex flex-column'>
              <TaskPriorityBarChart tasks={tasks} />
              <hr />
              <TaskProgressBar tasks={tasks} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectStatisticsView.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog
});

export default connect(mapStateToProps, { getBacklog })(ProjectStatisticsView);
