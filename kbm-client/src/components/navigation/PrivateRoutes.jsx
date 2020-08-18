import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import SecureRoute from '../auth/SecureRoute';
import ProjectsOverview from '../project/overview/ProjectsOverview';
import CreateProject from '../project/item/CreateProject';
import UpdateProject from '../project/item/UpdateProject';
import Board from '../board/Board';
import CreateTask from '../tasks/item/CreateTask';
import UserManagementBoard from '../management/users/UserManagementBoard';
import TaskOverview from '../tasks/overview/TaskOverview';
import TaskView from '../tasks/item/TaskView';
import ProjectStatisticsView from '../project/statistics/ProjectStatisticsView';

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
        <SecureRoute exact path='/mytasks' component={TaskOverview} />
        <SecureRoute
          exact
          path='/tasks/:projectID/:sequence'
          component={TaskView}
        />
        <SecureRoute
          exact
          path='/dashboard/:projectID'
          component={ProjectStatisticsView}
        />
      </Switch>
    );
  }
}

export default PrivateRoutes;
