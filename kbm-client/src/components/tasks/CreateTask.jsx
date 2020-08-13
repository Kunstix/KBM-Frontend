import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getTask, createTask, updateTask } from '../../actions/backlogActions';
import PropTypes from 'prop-types';
import moment from 'moment';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    const { projectID } = this.props.match.params;
    this.state = {
      id: '',
      summary: '',
      projectID: projectID,
      acceptanceCriteria: '',
      status: 'TODO',
      priority: 'MEDIUM',
      dueDate: '',
      errors: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.sequence) {
      const { projectID, sequence } = this.props.match.params;
      this.props.getTask(projectID, sequence, this.props.history);
    }
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  componentDidUpdate(nextProps, state, snapshot) {
    if (this.props.task !== nextProps.task) {
      this.setState({ ...this.props.task });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newTask = {
      projectID: this.state.projectID,
      summary: this.state.summary,
      acceptanceCriteria: this.state.acceptanceCriteria,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    if (this.state.id) {
      newTask['id'] = this.state.id;
      this.props.updateTask(newTask, this.props.history);
    }
    this.props.createTask(newTask, this.props.history);
  }

  render() {
    const { projectID } = this.props.match.params;
    const { errors } = this.state;

    return (
      <div className='add-PBI'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <Link to={`/board/${projectID}`} className='btn btn-light'>
                Back to Project Board
              </Link>
              <h4 className='display-5 text-center'>Edit Project Task</h4>
              <p className='lead text-center'>Project Name + Project Code</p>
              <form onSubmit={event => this.onSubmit(event)}>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.summary
                    })}
                    name='summary'
                    placeholder='Task summary'
                    value={this.state.summary || ''}
                    onChange={event => this.onChange(event)}
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
                    value={this.state.acceptanceCriteria || ''}
                    onChange={event => this.onChange(event)}
                  ></textarea>
                </div>
                {errors.acceptanceCriteria && (
                  <div className='invalid-feedback'>
                    {errors.acceptanceCriteria}
                  </div>
                )}
                <h6>Due Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className='form-control form-control-md'
                    name='dueDate'
                    value={
                      moment.utc(this.state.dueDate).format('YYYY-MM-DD') || ''
                    }
                    onChange={event => this.onChange(event)}
                  />
                </div>
                <div className='form-group'>
                  <select
                    className='form-control form-control-md'
                    name='priority'
                    value={this.state.priority}
                    onChange={event => this.onChange(event)}
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
                    value={this.state.status}
                    onChange={event => this.onChange(event)}
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

                <input
                  type='submit'
                  className='btn btn-primary btn-block mt-4'
                />
              </form>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateTask.propTypes = {
  getTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  task: state.backlog.task,
  errors: state.errors
});

export default connect(mapStateToProps, { getTask, updateTask, createTask })(
  CreateTask
);
