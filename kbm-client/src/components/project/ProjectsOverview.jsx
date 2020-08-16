import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import CreateProjectButton from './CreateProjectButton';
import { getProjects } from '../../actions/projectActions';

class ProjectsOverview extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className='projects'>
        <div className='container'>
          <h1 className='display-4 text-center'>Projects</h1>
          <br />
          <CreateProjectButton />
          <br />
          <hr />
          {projects.map(project => (
            <ProjectItem key={project.projectID} project={project} />
          ))}
        </div>
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
