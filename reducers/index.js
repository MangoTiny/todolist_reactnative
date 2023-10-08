import { combineReducers } from 'redux';
import todoReducer from './todolist'; // Import your reducer

const rootReducer = combineReducers({
  todolist: todoReducer, // Add your reducer to the root reducer
});

export default rootReducer;