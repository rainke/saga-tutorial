import React from 'react'

const AddTodo = () => {
  let input
  return (
    <div>
      <input ref={node => {
          input = node
        }} />
        <button>add todo</button>
    </div>
  )
}

export default AddTodo