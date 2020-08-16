import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import backlogReducer from './backlogReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';

export default combineReducers({
  auth: authReducer,
  users: userReducer,
  project: projectReducer,
  backlog: backlogReducer,
  errors: errorReducer
});
