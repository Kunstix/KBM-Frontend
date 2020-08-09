import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/Store';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import CreateProject from './components/project/CreateProject';
import UpdateProject from './components/project/UpdateProject';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.css';

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
      </Router>
    </Provider>
  );
}

export default App;
