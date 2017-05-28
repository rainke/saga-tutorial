export const addTodoSuccess = (text) => ({
  type: 'ADD_TODO_SUCCESS',
  text
})

export const requestAddTodo = () => ({
  type: 'REQUEST_ADD_TODO'
})

export const fetchTodo = (filter) => ({
  type:'FETCH_TODO',
  filter
})

export const fetchTodoSuccess= (todos) => ({
  type: 'FETCH_TODO_SUCCESS',
  todos
})

export const fetchTodoError= () => ({
  type: 'FETCH_TODO_ERROR'
})