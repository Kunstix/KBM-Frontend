import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getTask,
  createTask,
  updateTask
} from '../../../actions/backlogActions';
import PropTypes from 'prop-types';
import CreateTaskHead from './CreateTaskHead';
import ShowBigProjectButton from '../../project/buttons/ShowBigProjectButton';
import ShowBigBoardButton from '../../project/buttons/ShowBigBoardButton';
import CreateTaskForm from './CreateTaskForm';

class CreateTask extends Component {
  constructor(props) {
    super(props);

    const { projectID } = this.props.match.params;
    this.state = {
      id: '',
      summary: '',
      projectID: projectID,
      acceptanceCriteria: '',
      type: 'STORY',
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
      type: this.state.type,
      status: this.state.status,
      priority: this.state.priority,
      dueDate: this.state.dueDate
    };
    if (this.state.id) {
      newTask['id'] = this.state.id;
      newTask['sequence'] = this.state.sequence;
      this.props.updateTask(newTask, this.props.history);
    } else {
      this.props.createTask(newTask, this.props.history);
    }
  }

  render() {
    const { projectID } = this.props.match.params;
    const { errors } = this.state;
    const { sequence } = this.props.task;

    return (
      <div className='add-PBI'>
        <div className='container'>
          <div className='row d-flex justify-content-end mr-5'>
            <ShowBigProjectButton projectID={projectID} text='To Project' />
            <ShowBigBoardButton projectID={projectID} text='To Board' />
          </div>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <CreateTaskHead projectID={projectID} sequence={sequence} />
              <CreateTaskForm
                onSubmit={event => this.onSubmit(event)}
                onChange={event => this.onChange(event)}
                errors={errors}
                state={this.state}
              />
              <br />
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
