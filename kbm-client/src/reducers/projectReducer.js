import {
  GET_PROJECTS,
  GET_PROJECT,
  DELETE_PROJECT,
  GET_USERS_BY_PROJECT,
  ASSIGN_USER_TO_PROJECT,
  REMOVE_USER_FROM_PROJECT
} from '../actions/types';

const initialState = {
  projects: [],
  users: [],
  project: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          project => project.projectID !== action.projectID
        )
      };
    case GET_USERS_BY_PROJECT:
      return {
        ...state,
        users: action.payload
      };
    case ASSIGN_USER_TO_PROJECT:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case REMOVE_USER_FROM_PROJECT:
      console.log('JAP', action.payload);

      return {
        ...state,
        users: state.users.filter(
          user => user.username !== action.payload.username
        )
      };
    default:
      return state;
  }
}
