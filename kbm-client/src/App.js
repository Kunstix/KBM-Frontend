import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/Store';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import CreateProject from './components/project/CreateProject';
import UpdateProject from './components/project/UpdateProject';
import Board from './components/board/Board';
import CreateTask from './components/tasks/CreateTask';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/minty/bootstrap.css';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Header />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/addProject' component={CreateProject} />
        <Route
          exact
          path='/updateProject/:projectID'
          component={UpdateProject}
        />
        <Route exact path='/board/:projectID' component={Board} />
        <Route
          exact
          path='/updateTask/:projectID/:sequence'
          component={CreateTask}
        />
        <Route exact path='/createTask/:projectID' component={CreateTask} />
      </Router>
    </Provider>
  );
}

export default App;
