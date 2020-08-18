import {
  GET_USERS,
  GET_ROLES,
  PROMOTE_USER,
  DELETE_USER,
  DEACTIVATE_USER,
  ACTIVATE_USER
} from '../actions/types';

const initialState = {
  users: [],
  roles: [],
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload
      };
    case PROMOTE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.username === action.payload.username) {
            user.roles = [{ name: action.payload.role }];
          }
          return user;
        })
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(
          user => user.username !== action.payload.username
        )
      };
    case ACTIVATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.username === action.payload.username) {
            user.active = true;
          }
          return user;
        })
      };
    case DEACTIVATE_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.username === action.payload.username) {
            user.active = false;
          }
          return user;
        })
      };
    default:
      return state;
  }
}
