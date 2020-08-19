import axios from 'axios';
import swal from 'sweetalert2';
import {
  GET_USERS,
  GET_ROLES,
  GET_ERRORS,
  PROMOTE_USER,
  DELETE_USER,
  ACTIVATE_USER,
  DEACTIVATE_USER
} from './types';

export const getUsers = () => async dispatch => {
  const res = await axios.get('/api/user/all');
  dispatch({ type: GET_USERS, payload: res.data });
};

export const getUsersByProject = projectID => async dispatch => {
  const res = await axios.get(`/api/project/users/${projectID}`);
  dispatch({ type: GET_USERS, payload: res.data });
};

export const getRoles = () => async dispatch => {
  const res = await axios.get('/api/role/all');
  dispatch({ type: GET_ROLES, payload: res.data });
};

export const assignRole = (username, role) => async dispatch => {
  try {
    await axios.patch(`/api/user/promote/${username}`, [role]);
    dispatch({ type: GET_ERRORS, payload: {} });
    dispatch({ type: PROMOTE_USER, payload: { username, role } });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const deleteUser = username => async dispatch => {
  try {
    const { isConfirmed } = await swal.fire({
      text: `You sure you want to delete ${username}?`,
      icon: 'warning',
      showCancelButton: true,
      backdrop: true,
      confirmButtonColor: '#FF7851',
      confirmButtonText: 'Yes, delete it!'
    });
    if (isConfirmed) {
      await axios.delete(`/api/user/${username}`);
      dispatch({ type: DELETE_USER, payload: { username } });
      dispatch({ type: GET_ERRORS, payload: {} });
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const activateUser = username => async dispatch => {
  try {
    await axios.patch(`/api/user/activate/${username}`);
    dispatch({ type: ACTIVATE_USER, payload: { username } });
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};

export const deactivateUser = username => async dispatch => {
  try {
    const { isConfirmed } = await swal.fire({
      text: `You sure you want to deactivate ${username}?`,
      icon: 'warning',
      showCancelButton: true,
      backdrop: true,
      confirmButtonColor: '#FF7851',
      confirmButtonText: `Yes, deactivate ${username}!`
    });
    if (isConfirmed) {
      await axios.patch(`/api/user/deactivate/${username}`);
      dispatch({ type: DEACTIVATE_USER, payload: { username } });
      dispatch({ type: GET_ERRORS, payload: {} });
    }
  } catch (err) {
    console.log('ERROR', err);
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};
