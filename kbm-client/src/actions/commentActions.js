import axios from 'axios';
import { GET_ERRORS, CREATE_COMMENT } from './types';

export const createComment = (sequence, comment) => async dispatch => {
  try {
    const res = await axios.post(`/api/comment/${sequence}`, comment);
    dispatch({ type: CREATE_COMMENT, payload: res.data });
    dispatch({ type: GET_ERRORS, payload: {} });
  } catch (err) {
    dispatch({ type: GET_ERRORS, payload: err.response.data });
  }
};
