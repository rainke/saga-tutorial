import React from 'react'
import axios from 'axios'
import Counter from './components/Counter'
const App = () => (<div>
  <h1>HELLO SAGA</h1>
  <Counter />
</div>)

axios.get('/api/list', {
  params:{
    completed: true
  }
});

export default App
