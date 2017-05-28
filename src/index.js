import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import storeConfigure from './storeConfigure'

const store = storeConfigure()
const root = document.getElementById('root')

render(<Provider store={store}>
  <App />
</Provider>, root)