import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBacklogByUser } from '../../../actions/backlogActions';
import PersonalStatisticsQuateredView from './PersonalStatisticsQuateredView';
import PersonalStatisticsViewHead from './PersonalStatisticsViewHead';

class PersonalStatisticsView extends Component {
  componentDidMount() {
    this.props.getBacklogByUser();
  }

  render() {
    const { tasks } = this.props.backlog;
    const { projectID } = this.props.match.params;
    return (
      <div className='h-75 pl-4'>
        <PersonalStatisticsViewHead projectID={projectID} />
        <hr />
        <PersonalStatisticsQuateredView tasks={tasks} />
      </div>
    );
  }
}

PersonalStatisticsView.propTypes = {
  getBacklog: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog
});

export default connect(mapStateToProps, { getBacklogByUser })(
  PersonalStatisticsView
);
