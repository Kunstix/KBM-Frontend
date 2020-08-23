import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { createProject } from '../../../actions/projectActions';

class CreateProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: '',
      projectID: '',
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

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectID: this.state.projectID,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.createProject(newProject, this.props.history);
  }

  render() {
    const { errors } = this.state;
    return (
      <div className='project'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h5 className='display-4 text-center'>Create / Edit Project </h5>
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
                    className={classNames('form-control form-control-md', {
                      'is-invalid': errors.projectID
                    })}
                    placeholder='Unique Project ID'
                    name='projectID'
                    value={this.state.projectID}
                    onChange={event => this.onChange(event)}
                  />
                  {errors.projectID && (
                    <div className='invalid-feedback'>{errors.projectID}</div>
                  )}
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
                  ></textarea>
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
                  value='Create'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors.errors
});

export default connect(mapStateToProps, { createProject })(CreateProject);
