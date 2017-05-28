import axios from 'axios';

export const getTodos = (params) => 
  axios.get('/api/list', {params})
    .then(result => ({todos: result.data}))
    .catch(err => ({err}))