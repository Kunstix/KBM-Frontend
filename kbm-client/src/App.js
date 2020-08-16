import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Store';
import jwt_decode from 'jwt-decode';
import setJWTtoken from './utils/auth/setJWTToken';
import { logout } from './actions/authActions';
import { SET_CURRENT_USER } from './actions/types';
import Sidebar from './components/layout/Sidebar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/flatly/bootstrap.css';
import PublicRoutes from './components/navigation/PublicRoutes';
import PrivateRoutes from './components/navigation/PrivateRoutes';

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
        <div className='d-flex justify-content-stretch align-items-stretch w-100'>
          <Sidebar />
          <div className='vh-100 w-100 p-20'>
            <PublicRoutes />
            <PrivateRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
