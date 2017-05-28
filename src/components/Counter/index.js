import React, { Component } from 'react'
import {connect} from 'react-redux' 
import * as actions from '@/actions'
import { getSagaCounter } from '@/reducers'

class Counter extends Component {
  render() {
    const { increment, decrement, myIncrement } = this.props
    return (
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={myIncrement}>myIncrement</button>
        <br />
        { this.props.counter }
      </div>
    )
  }
}

export default connect(
  (state) => ({counter: getSagaCounter(state)}),
  actions
)(Counter)