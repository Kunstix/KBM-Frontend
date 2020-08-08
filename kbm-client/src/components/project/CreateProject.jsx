import React, { Component } from 'react';

class CreateProject extends Component {
  constructor() {
    super();

    this.state = {
      projectName: '',
      projectID: '',
      description: '',
      startDate: '',
      endDate: ''
    };
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
    console.log(newProject);
  }

  render() {
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
                    className='form-control form-control-md '
                    placeholder='Project Name'
                    name='projectName'
                    value={this.state.projectName}
                    onChange={event => this.onChange(event)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-md'
                    placeholder='Unique Project ID'
                    name='projectID'
                    value={this.state.projectID}
                    onChange={event => this.onChange(event)}
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    className='form-control form-control-md'
                    placeholder='Project Description'
                    name='description'
                    value={this.state.description}
                    onChange={event => this.onChange(event)}
                  ></textarea>
                </div>
                <h6>Start Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className='form-control form-control-md'
                    name='startDate'
                    value={this.state.startDate}
                    onChange={event => this.onChange(event)}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className='form-group'>
                  <input
                    type='date'
                    className='form-control form-control-md'
                    name='endDate'
                    value={this.state.endDate}
                    onChange={event => this.onChange(event)}
                  />
                </div>

                <input
                  type='submit'
                  className='btn btn-primary btn-block mt-4'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProject;
