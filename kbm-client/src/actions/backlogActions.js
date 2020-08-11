import axios from 'axios';
import { GET_BACKLOG, GET_ERRORS } from '../actions/types';

export const createTask = (task, history) => async dispatch => {
  try {
    await axios.post(`/api/backlog/${task.projectID}`, task);
    history.push(`/board/${task.projectID}`);
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const getBacklog = projectID => async dispatch => {
  try {
    const res = await axios.get(`/api/backlog/${projectID}`);
    dispatch({
      type: GET_BACKLOG,
      payload: res.data
    });
  } catch (err) {}
};
