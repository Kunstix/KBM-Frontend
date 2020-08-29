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
    return (
      <div className='h-75 pl-5 pr-5'>
        <PersonalStatisticsViewHead username={username} />
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
