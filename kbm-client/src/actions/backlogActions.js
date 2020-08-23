import axios from 'axios';
import swal from 'sweetalert2';

import {
  GET_BACKLOG,
  GET_TASK,
  DELETE_TASK,
  ASSIGN_USER_TO_TASK,
  GET_ERRORS
} from '../actions/types';

export const createTask = (task, history) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${task.projectID}`, task);
    history.push(`/tasks/${task.projectID}/${task.sequence}`);
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const getTask = (projectID, sequence, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${projectID}/${sequence}`);
    console.log(res.data);
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

export const getBacklogByUser = () => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog`);
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
    history.push(`/tasks/${task.projectID}/${task.sequence}`);
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

export const deleteTask = (projectID, sequence, callback) => async dispatch => {
  const { isConfirmed } = await swal.fire({
    text: `You sure you want to delete ${projectID}?`,
    icon: 'warning',
    showCancelButton: true,
    backdrop: true,
    confirmButtonColor: '#FF7851',
    confirmButtonText: 'Yes, delete it!'
  });
  if (isConfirmed) {
    await axios.delete(`/api/backlog/${projectID}/${sequence}`);
    dispatch({
      type: DELETE_TASK,
      payload: sequence
    });
  }
  if (callback) {
    callback();
  }
};

export const assignUserToTask = (
  projectID,
  sequence,
  assignee,
  callback
) => async dispatch => {
  try {
    const res = await axios.patch(
      `/api/backlog/${projectID}/${sequence}/${assignee.username}`
    );
    dispatch({ type: GET_ERRORS, payload: {} });
    console.log(res);
    dispatch({
      type: ASSIGN_USER_TO_TASK,
      payload: { assignee, sequence, task: res.data }
    });
    if (callback) {
      callback();
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};
