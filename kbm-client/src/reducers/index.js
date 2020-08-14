import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import backlogReducer from './backlogReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  project: projectReducer,
  backlog: backlogReducer,
  errors: errorReducer
});
