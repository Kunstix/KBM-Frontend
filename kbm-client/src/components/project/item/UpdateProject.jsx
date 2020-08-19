import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getProject, createProject } from '../../../actions/projectActions';

class UpdateProject extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      projectName: '',
      projectID: '',
      projectLeader: '',
      description: '',
      startDate: '',
      endDate: '',
      errors: {}
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  componentDidMount() {
    const { projectID } = this.props.match.params;
    this.props.getProject(projectID, this.props.history);
  }

  componentDidUpdate(nextProps, state, snapshot) {
    if (this.props.project !== nextProps.project) {
      this.setState({ ...this.props.project });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const updatedProject = {
      id: this.state.id,
      projectID: this.state.projectID,
      projectName: this.state.projectName,
      projectLeader: this.state.projectLeader,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.createProject(updatedProject, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='project'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h5 className='display-4 text-center'>Edit Project</h5>
              <hr />
              <form onSubmit={event => this.onSubmit(event)}>
                <div className='form-group'>
                  <input
                    type='text'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.projectName
                    })}
                    placeholder='Project Name'
                    name='projectName'
                    value={this.state.projectName}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.projectName && (
                    <div className='invalid-feedback'>{errors.projectName}</div>
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-md'
                    placeholder='Unique Project ID'
                    name='projectID'
                    value={this.state.projectID}
                    disabled
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-md'
                    placeholder='Project Leader'
                    name='projectLeader'
                    value={this.state.projectLeader}
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.description
                    })}
                    placeholder='Project Description'
                    name='description'
                    value={this.state.description}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.description && (
                    <div className='invalid-feedback'>{errors.description}</div>
                  )}
                </div>
                <h6>Start Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.startDate
                    })}
                    name='startDate'
                    value={this.state.startDate}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.startDate && (
                    <div className='invalid-feedback'>{errors.startDate}</div>
                  )}
                </div>
                <h6>Estimated End Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.endDate
                    })}
                    name='endDate'
                    value={this.state.endDate}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.endDate && (
                    <div className='invalid-feedback'>{errors.endDate}</div>
                  )}
                </div>

                <input
                  type='submit'
                  className='btn btn-primary btn-block mt-4'
                  value='Update'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project.project,
  errors: state.errors
});

export default connect(mapStateToProps, { getProject, createProject })(
  UpdateProject
);
