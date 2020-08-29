import React, { Component } from 'react';
import ProjectListItem from '../item/ProjectListItem';

export default class ProjectsList extends Component {
  render() {
    const { projects } = this.props;
    return projects.length > 0 ? (
      <ul className='list-group-flush pl-0 overflow-auto h-100'>
        {projects.map(project => (
          <ProjectListItem key={project.projectID} project={project} />
        ))}
      </ul>
    ) : (
      <div className='alert alert-secondary'>
        You are not assigned to any project.
      </div>
    );
  }
}
