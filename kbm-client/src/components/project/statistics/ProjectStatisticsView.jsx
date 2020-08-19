import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBacklog } from '../../../actions/backlogActions';
import ProjectsViewHead from './ProjectStatisticsViewHead';
import ProjectStatisticsQuateredView from './ProjectStatisticsQuateredView';

class ProjectStatisticsView extends Component {
  componentDidMount() {
    const { projectID } = this.props.match.params;
    this.props.getBacklog(projectID);
  }

  render() {
    const { tasks } = this.props.backlog;
    const { projectID } = this.props.match.params;
    return (
      <div className='h-75 pl-4'>
        <ProjectsViewHead projectID={projectID} />
        <hr />
        <ProjectStatisticsQuateredView tasks={tasks} />
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
