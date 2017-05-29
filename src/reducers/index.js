import { combineReducers } from 'redux';
import { normalize, schema } from 'normalizr'

const todoSchema = new schema.Entity('todos')
const todoListSchema = new schema.Array(todoSchema)

const todos = (state = {}, action) => {
  switch(action.type){
  case 'FETCH_TODO_SUCCESS':
    return action.todos.entities.todos
  default:
    return state
  }
}
const ids = (state =[], action) => {
  switch(action.type){
  case 'FETCH_TODO_SUCCESS':
    return action.todos.result
  default:
    return state
  }
}
export const getTodos = ({todos, ids}) => ids.map(id => todos[id])
export default combineReducers({
  todos,
  ids
})
