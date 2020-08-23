import {
  GET_BACKLOG,
  GET_TASK,
  DELETE_TASK,
  ASSIGN_USER_TO_TASK,
  CREATE_COMMENT
} from '../actions/types';

const initialState = {
  tasks: [],
  task: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_BACKLOG:
      return {
        ...state,
        tasks: action.payload
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.sequence !== action.payload)
      };
    case ASSIGN_USER_TO_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.sequence === action.payload.sequence) {
            task.asignee = action.payload.assignee;
          }
          return task;
        }),
        task: action.payload.task
      };
    case CREATE_COMMENT:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.sequence === action.payload.sequence) {
            task.asignee = action.payload.assignee;
          }
          return task;
        }),
        task: Object.assign(
          {},
          {
            ...state.task,
            comments: [...state.task.comments, action.payload]
          }
        )
      };
    default:
      return state;
  }
}
