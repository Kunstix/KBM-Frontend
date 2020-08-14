import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Store';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import CreateProject from './components/project/CreateProject';
import UpdateProject from './components/project/UpdateProject';
import Board from './components/board/Board';
import CreateTask from './components/tasks/CreateTask';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import jwt_decode from 'jwt-decode';
import setJWTtoken from './utils/auth/setJWTToken';
import { logout } from './actions/authActions';
import { SET_CURRENT_USER } from './actions/types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.css';
import SecureRoute from './components/auth/SecureRoute';

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTtoken(jwtToken);
  const decodedToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decodedToken
  });
  const currentTime = Date.now();
  if (decodedToken.exp > currentTime) {
    store.dispatch(logout());
    window.location.href = '/';
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        {
          // PUBLIC
        }
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        {
          // PRIVATE
        }
        <Switch>
          <SecureRoute exact path='/dashboard' component={Dashboard} />
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
          <SecureRoute exact path='/' component={Landing} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
