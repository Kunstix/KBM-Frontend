import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import CreateProject from './components/project/CreateProject';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/lux/bootstrap.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/addProject' component={CreateProject} />
      </Router>
    </div>
  );
}

export default App;
