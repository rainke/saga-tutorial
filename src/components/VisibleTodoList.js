import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { fetchTodo } from '@/actions'
import {getTodos} from '@/reducers'
class VisibleTodoList extends Component {
  componentDidMount(){
    this.fetchTodo()
  }
  componentDidUpdate(prevProps) {
    const {filter} = this.props;
    if(filter !== prevProps.filter) {
      this.fetchTodo()
    }
  }

  fetchTodo() {
    const {filter, fetchTodo} = this.props
    fetchTodo(filter)
  }
  render() {
    const { todos } = this.props
    return  (
      <div>
        {todos.map(todo => (
          <p key={todo.id}>
            <span style={{textDecoration: todo.completed ? 'line-through': ''}}>{todo.text}</span>
            <a href="#">×</a>
          </p>
        ))}
      </div>
    )
  }
}

export default withRouter(connect(
  (state, {match:{params: {filter}}}) => ({
    todos: getTodos(state),
    filter
  }),
  { fetchTodo }
)(VisibleTodoList))