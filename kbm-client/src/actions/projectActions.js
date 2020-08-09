import axios from 'axios';
import { GET_PROJECTS, GET_PROJECT, GET_ERRORS, DELETE_PROJECT } from './types';

export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post('/api/project', project);
    history.push('./dashboard');
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const getProjects = () => async dispatch => {
  const res = await axios.get('/api/project/all');
  dispatch({ type: GET_PROJECTS, payload: res.data });
};

export const getProject = (projectID, history) => async dispatch => {
  try {
    const res = await axios.get(`/api/project/${projectID}`);
    dispatch({ type: GET_PROJECT, payload: res.data });
  } catch (err) {
    history.push('/dashboard');
  }
};

export const deleteProject = (projectID, history) => async dispatch => {
  if (window.confirm(`You sure you want to delete ${projectID}?`)) {
    try {
      await axios.delete(`/api/project/${projectID}`);
      dispatch({ type: DELETE_PROJECT, projectID });
    } catch (err) {
      history.push('/dashboard');
    }
  }
};
