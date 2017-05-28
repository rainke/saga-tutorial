import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import TodoList from './components/TodoList'
const App = () => (<div>
  <BrowserRouter>
    <div>
      <h1>Hello Saga</h1>
      <div>
        <Route path="/:filter?" component={TodoList}/>
      </div>
    </div>
  </BrowserRouter>
</div>)

export default App
