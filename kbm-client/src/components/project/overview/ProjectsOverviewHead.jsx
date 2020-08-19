import React, { Component } from 'react';
import CreateProjectButton from '../buttons/CreateProjectButton';

export default class ProjectsOverviewHead extends Component {
  render() {
    return (
      <div className='d-flex justify-content-between align-items-center'>
        <h3 className='text-primary font-weight-bold'>My Projects</h3>
        <CreateProjectButton />
      </div>
    );
  }
}
