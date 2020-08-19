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
    const { username } = this.props;
    const { projectID } = this.props.match.params;
    return (
      <div className='h-75 pl-4'>
        <PersonalStatisticsViewHead projectID={projectID} username={username} />
        <hr />
        <PersonalStatisticsQuateredView tasks={tasks} />
      </div>
    );
  }
}

PersonalStatisticsView.propTypes = {
  getBacklogByUser: PropTypes.func.isRequired,
  backlog: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  backlog: state.backlog,
  username: state.auth.user.fullname
});

export default connect(mapStateToProps, { getBacklogByUser })(
  PersonalStatisticsView
);
