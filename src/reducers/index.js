import { combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch(action.type){
  case 'FETCH_TODO_SUCCESS':
    return action.todos
  default:
    return state
  }
}
export const getTodos = (state) => state.todos
export default combineReducers({
  todos
})
