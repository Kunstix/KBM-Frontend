import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTask } from '../../../actions/backlogActions';
import { connect } from 'react-redux';
import TaskViewHead from './TaskViewHead';
import SplittedDetailsRow from './SplittedDetailsRow';
import ShowBoardButton from '../../board/buttons/ShowBoardButton';
import PriorityBadge from '../buttons/PriorityBadge';
import TaskTabs from '../tabs/TaskTabs';

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
      histories,
      comments,
      acceptanceCriteria
    } = this.props.task;
    return (
      <div className='row h-75 w-100'>
        <div className='col-md-6 d-flex flex-column pl-5 h-100'>
          <div className='d-flex justify-content-between align-items-center pb-3'>
            <h3 className='text-primary font-weight-bold'>Task Details</h3>
            <ShowBoardButton projectID={projectID} />
          </div>
          <TaskViewHead
            projectID={projectID}
            sequence={sequence}
            history={this.props.history}
          />
          <div className='card-body'>
            <SplittedDetailsRow
              leftTitle={'Title'}
              leftContent={summary}
              rightTitle={'Description'}
              rightContent={acceptanceCriteria}
            />
            <SplittedDetailsRow
              leftTitle={'Assigned'}
              leftContent={asignee ? asignee.fullname : ''}
              rightTitle={'Priority'}
              rightContent={<PriorityBadge priority={priority} />}
            />
            <SplittedDetailsRow
              leftTitle={'Status'}
              leftContent={status}
              rightTitle={'Type'}
              rightContent={type}
            />
            <SplittedDetailsRow
              leftTitle={'Created at'}
              leftContent={createdAt}
              rightTitle={'Due Date'}
              rightContent={dueDate}
            />
          </div>
        </div>
        <div className='col-md-6 h-100 p-0'>
          <TaskTabs
            histories={histories}
            comments={comments}
            sequence={sequence}
          />
        </div>
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
