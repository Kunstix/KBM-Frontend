import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import backlogReducer from './backlogReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import { LOGOUT } from '../actions/types';

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  project: projectReducer,
  backlog: backlogReducer,
  errors: errorReducer
});

export default (state, action) =>
  rootReducer(action.type === LOGOUT ? undefined : state, action);
