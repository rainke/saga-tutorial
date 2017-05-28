import React from 'react'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from './Footer'


const TodoList = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoList