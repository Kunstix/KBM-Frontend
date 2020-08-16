import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import SecureRoute from '../auth/SecureRoute';
import ProjectsOverview from '../project/ProjectsOverview';
import CreateProject from '../project/CreateProject';
import UpdateProject from '../project/UpdateProject';
import Board from '../board/Board';
import CreateTask from '../tasks/CreateTask';
import UserManagementBoard from '../management/users/UserManagementBoard';

class PrivateRoutes extends Component {
  render() {
    return (
      <Switch>
        <SecureRoute exact path='/myprojects' component={ProjectsOverview} />
        <SecureRoute exact path='/addProject' component={CreateProject} />
        <SecureRoute
          exact
          path='/updateProject/:projectID'
          component={UpdateProject}
        />
        <SecureRoute exact path='/board/:projectID' component={Board} />
        <SecureRoute
          exact
          path='/updateTask/:projectID/:sequence'
          component={CreateTask}
        />
        <SecureRoute
          exact
          path='/createTask/:projectID'
          component={CreateTask}
        />
        <SecureRoute exact path='/users' component={UserManagementBoard} />
      </Switch>
    );
  }
}

export default PrivateRoutes;
