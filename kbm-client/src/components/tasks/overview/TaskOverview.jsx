import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBacklogByUser, deleteTask } from '../../../actions/backlogActions';
import PropTypes from 'prop-types';
import TaskOverviewTable from './TaskOverviewTable';

class TaskOverview extends Component {
  componentDidMount() {
    this.props.getBacklogByUser();
  }

  render() {
    const { tasks } = this.props;
    return (
      <div className='row w-100 pl-5'>
        <div className='col-md-12 mb-3'>
          <h3 className='text-primary font-weight-bold'>Tasks Overview</h3>
        </div>
        <div className='col-md-12 table-responsive'>
          <TaskOverviewTable tasks={tasks} />
        </div>
      </div>
    );
  }
}

TaskOverview.propTypes = {
  getBacklogByUser: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tasks: state.backlog.tasks
});

export default connect(mapStateToProps, { getBacklogByUser, deleteTask })(
  TaskOverview
);
