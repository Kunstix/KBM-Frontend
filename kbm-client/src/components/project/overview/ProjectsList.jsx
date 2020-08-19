import React, { Component } from 'react';
import ProjectListItem from '../item/ProjectListItem';

export default class ProjectsList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <ul className='list-group-flush pl-0 overflow-auto h-100'>
        {projects.map(project => (
          <ProjectListItem key={project.projectID} project={project} />
        ))}
      </ul>
    );
  }
}
