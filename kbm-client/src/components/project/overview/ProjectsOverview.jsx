import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProjects } from '../../../actions/projectActions';
import ProjectsOverviewHead from './ProjectsOverviewHead';
import ProjectsList from './ProjectsList';

class ProjectsOverview extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    const { projects } = this.props.project;
    return (
      <div className='pl-5 pr-5 projects'>
        <ProjectsOverviewHead />
        <hr />
        <ProjectsList projects={projects} />
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
