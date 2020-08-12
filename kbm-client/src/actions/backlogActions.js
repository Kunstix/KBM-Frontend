import axios from 'axios';
import {
  GET_BACKLOG,
  GET_TASK,
  DELETE_TASK,
  GET_ERRORS
} from '../actions/types';

export const createTask = (task, history) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${task.projectID}`, task);
    history.push(`/board/${task.projectID}`);
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const getTask = (projectID, sequence, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${projectID}/${sequence}`);
    dispatch({ type: GET_TASK, payload: res.data });
  } catch (err) {
    history.push('/dashboard');
  }
};

export const getBacklog = projectID => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${projectID}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const updateTask = (task, history) => async dispatch => {
  try {
    await axios.patch(`/api/backlog/${task.projectID}/${task.sequence}`, task);
    history.push(`/projectBoard/${task.projectID}`);
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteProjectTask = (projectID, pt_id) => async dispatch => {
  if (
    window.confirm(
      `You are deleting project task ${pt_id}, this action cannot be undone`
    )
  ) {
    await axios.delete(`/api/backlog/${projectID}/${pt_id}`);
    dispatch({
      type: DELETE_TASK,
      payload: pt_id
    });
  }
};
