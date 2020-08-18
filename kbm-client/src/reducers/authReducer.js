import { SET_CURRENT_USER, LOGOUT } from '../actions/types';
import _ from 'lodash';

const initialState = {
  validToken: false,
  user: {}
};

const booleanActionPayload = payload => {
  if (payload && !_.isEmpty(payload)) {
    return true;
  } else {
    return false;
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: booleanActionPayload(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
