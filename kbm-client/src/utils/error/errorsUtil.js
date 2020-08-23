import { GET_ERRORS } from '../../actions/types';

export const asyncError = (fn, callback) => {
  try {
    fn();
  } catch (err) {
    if (err.response.data) {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    } else {
      dispatch({ type: GET_ERRORS, payload: err });
    }
    if (callback) {
      callback();
    }
  }
};
