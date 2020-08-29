import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import SecureRoute from '../auth/SecureRoute';
import ProjectsOverview from '../project/overview/ProjectsOverview';
import CreateProject from '../project/item/CreateProject';
import UpdateProject from '../project/item/UpdateProject';
import Board from '../board/Board';
import CreateTask from '../tasks/item/CreateTask';
import UserManagementBoard from '../users/UserManagementBoard';
import TaskOverview from '../tasks/overview/TaskOverview';
import TaskView from '../tasks/item/TaskView';
import ProjectStatisticsView from '../project/statistics/ProjectStatisticsView';
import PersonalStatisticsView from '../users/statistics/PersonalStatisticsView';
import ProjectView from '../project/item/ProjectView';
import { Role } from '../../utils/auth/role';

class PrivateRoutes extends Component {
  render() {
    return (
      <Switch>
        <SecureRoute
          exact
          path='/myprojects'
          component={ProjectsOverview}
          roles={[Role.PM, Role.DEV, Role.WATCHER, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/addProject'
          component={CreateProject}
          roles={[Role.PM, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/updateProject/:projectID'
          component={UpdateProject}
          roles={[Role.PM, Role.ADMIN]}
        />
        <SecureRoute exact path='/board/:projectID' component={Board} />
        <SecureRoute
          exact
          path='/updateTask/:projectID/:sequence'
          component={CreateTask}
          roles={[Role.PM, Role.DEV, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/createTask/:projectID'
          component={CreateTask}
          roles={[Role.PM, Role.DEV, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/users'
          component={UserManagementBoard}
          roles={[Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/mytasks'
          component={TaskOverview}
          roles={[Role.PM, Role.DEV, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/tasks/:projectID/:sequence'
          component={TaskView}
          roles={[Role.PM, Role.DEV, Role.WATCHER, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/dashboard/:projectID'
          component={ProjectStatisticsView}
          roles={[Role.PM, Role.DEV, Role.WATCHER, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/dashboard'
          component={PersonalStatisticsView}
          roles={[Role.PM, Role.DEV, Role.WATCHER, Role.ADMIN]}
        />
        <SecureRoute
          exact
          path='/project/:projectID'
          component={ProjectView}
          roles={[Role.PM, Role.DEV, Role.WATCHER, Role.ADMIN]}
        />
      </Switch>
    );
  }
}

export default PrivateRoutes;
