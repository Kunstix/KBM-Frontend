import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTask } from '../../../actions/backlogActions';
import { connect } from 'react-redux';
import TaskViewHead from './TaskViewHead';
import TaskDetailRow from './TaskDetailRow';

class TaskView extends Component {
  componentDidMount() {
    const { projectID, sequence } = this.props.match.params;
    this.props.getTask(projectID, sequence, this.props.history);
  }

  render() {
    const {
      summary,
      projectID,
      asignee,
      priority,
      createdAt,
      dueDate,
      sequence,
      status,
      type,
      acceptanceCriteria
    } = this.props.task;
    return (
      <div className='row'>
        <div className='col-md-6 d-flex flex-column pl-5'>
          <h3 className='text-primary font-weight-bold pb-3'>Task Details</h3>
          <TaskViewHead
            projectID={projectID}
            sequence={sequence}
            history={this.props.history}
          />
          <div className='card-body'>
            <TaskDetailRow
              leftTitle={'Title'}
              leftContent={summary}
              rightTitle={'Description'}
              rightContent={acceptanceCriteria}
            />
            <TaskDetailRow
              leftTitle={'Assigned'}
              leftContent={asignee ? asignee.fullname : ''}
              rightTitle={'Priority'}
              rightContent={priority}
            />
            <TaskDetailRow
              leftTitle={'Status'}
              leftContent={status}
              rightTitle={'Type'}
              rightContent={type}
            />
            <TaskDetailRow
              leftTitle={'Created at'}
              leftContent={createdAt}
              rightTitle={'Due Date'}
              rightContent={dueDate}
            />
          </div>
        </div>
        <div className='col-md-6'>Comments, Attachments, History</div>
      </div>
    );
  }
}

TaskView.propTypes = {
  getTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  task: state.backlog.task
});

export default connect(mapStateToProps, { getTask })(TaskView);
