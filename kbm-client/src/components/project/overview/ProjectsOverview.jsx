import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectItem from '../item/ProjectItem';
import CreateProjectButton from '../buttons/CreateProjectButton';
import { getProjects } from '../../../actions/projectActions';

class ProjectsOverview extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className='pl-4 pr-4 projects container'>
        <div className='d-flex justify-content-between align-items-center'>
          <h3 className='text-primary font-weight-bold'>My Projects</h3>
          <CreateProjectButton />
        </div>
        <hr />
        <ul className='list-group-flush pl-0 overflow-auto h-100'>
          {projects.map(project => (
            <ProjectItem key={project.projectID} project={project} />
          ))}
        </ul>
      </div>
    );
  }
}

ProjectsOverview.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjects })(ProjectsOverview);
