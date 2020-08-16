import axios from 'axios';
import swal from 'sweetalert2';
import { GET_USERS, GET_ROLES, GET_ERRORS, PROMOTE_USER } from './types';

export const getUsers = () => async dispatch => {
  const res = await axios.get('/api/user/all');
  dispatch({ type: GET_USERS, payload: res.data });
};

export const getRoles = () => async dispatch => {
  const res = await axios.get('/api/role/all');
  dispatch({ type: GET_ROLES, payload: res.data });
};

export const assignRole = (username, role, history) => async dispatch => {
  try {
    const res = await axios.patch(`/api/user/promote/${username}`, [role]);
    console.log(res);
    dispatch({ type: GET_ERRORS, payload: {} });
    dispatch({ type: PROMOTE_USER, payload: { username, role } });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};
