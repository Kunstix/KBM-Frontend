import React, { Component } from 'react';
import PriorityButton from '../buttons/PriorityButton';
import TypeButton from '../buttons/TypeButton';
import UpdateTaskButton from '../buttons/UpdateTaskButton';
import ViewTaskButton from '../buttons/ViewTaskButton';

class TaskTableItem extends Component {
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
      type
    } = this.props.task;
    const { simple = false } = this.props;
    return (
      <tr>
        <td>{sequence}</td>
        <td className='d-none d-sm-table-cell'>{summary}</td>
        {!simple && <td className='d-none d-sm-table-cell'>{projectID}</td>}
        <td className='d-none d-md-table-cell'>
          {asignee && asignee.fullname}
        </td>
        <td>
          <PriorityButton priority={priority} />
        </td>
        <td>{status.replace('IN_', '')}</td>
        <td>
          <TypeButton type={type} />
        </td>
        {!simple && <td className='d-none d-lg-table-cell'>{createdAt}</td>}
        {!simple && <td className='d-none d-lg-table-cell'>{dueDate}</td>}
        <td className='d-none d-sm-table-cell'>
          <ViewTaskButton projectID={projectID} sequence={sequence} />
          {!simple && (
            <UpdateTaskButton projectID={projectID} sequence={sequence} />
          )}
        </td>
      </tr>
    );
  }
}

export default TaskTableItem;
