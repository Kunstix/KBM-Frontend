import React, { Component } from 'react';
import classNames from 'classnames';

export default class CreateTaskForm extends Component {
  render() {
    const { onSubmit, onChange, errors } = this.props;
    const {
      acceptanceCriteria,
      type,
      status,
      priority,
      dueDate,
      summary
    } = this.props.state;
    console.log(dueDate);
    return (
      <form onSubmit={event => onSubmit(event)}>
        <div className='form-group'>
          <input
            type='text'
            className={classNames('form-control form-control-md', {
              'is-invalid': errors.summary
            })}
            name='summary'
            placeholder='Task summary'
            value={summary || ''}
            onChange={event => onChange(event)}
          />
          {errors.summary && (
            <div className='invalid-feedback'>{errors.summary}</div>
          )}
        </div>
        <div className='form-group'>
          <textarea
            className={classNames('form-control form-control-md', {
              'is-invalid': errors.acceptanceCriteria
            })}
            placeholder='Acceptance Criteria'
            name='acceptanceCriteria'
            value={acceptanceCriteria || ''}
            onChange={event => onChange(event)}
          ></textarea>
        </div>
        {errors.acceptanceCriteria && (
          <div className='invalid-feedback'>{errors.acceptanceCriteria}</div>
        )}
        <h6>Due Date</h6>
        <div className='form-group'>
          <input
            type='date'
            className='form-control form-control-md'
            name='dueDate'
            value={dueDate || ''}
            onChange={event => onChange(event)}
          />
        </div>
        <div className='form-group'>
          <select
            className='form-control form-control-md'
            name='type'
            value={type}
            onChange={event => onChange(event)}
          >
            <option value={''}>Select Type</option>
            <option value={'STORY'}>Story</option>
            <option value={'BUG'}>Bug</option>
          </select>
        </div>
        <div className='form-group'>
          <select
            className='form-control form-control-md'
            name='priority'
            value={priority}
            onChange={event => onChange(event)}
          >
            <option value={''}>Select Priority</option>
            <option value={'HIGH'}>High</option>
            <option value={'MEDIUM'}>Medium</option>
            <option value={'LOW'}>Low</option>
          </select>
        </div>
        <div className='form-group'>
          <select
            className='form-control form-control-md'
            name='status'
            value={status}
            onChange={event => onChange(event)}
          >
            <option value=''>Select Status</option>
            <option value='TODO'>TODO</option>
            <option value='IN_DESIGN'>IN DESIGN</option>
            <option value='IN_PROGRESS'>IN PROGRESS</option>
            <option value='IN_REVIEW'>IN REVIEW</option>
            <option value='IN_TEST'>TEST</option>
            <option value='DONE'>DONE</option>
          </select>
        </div>

        <input type='submit' className='btn btn-primary btn-block mt-4' />
      </form>
    );
  }
}
