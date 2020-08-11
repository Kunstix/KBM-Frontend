import { combineReducers } from 'redux';
import projectReducer from './projectReducer';
import backlogReducer from './backlogReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  project: projectReducer,
  backlog: backlogReducer,
  errors: errorReducer
});
