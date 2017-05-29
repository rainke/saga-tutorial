import axios from 'axios';
import { normalize, schema } from 'normalizr';

const todoSchema = new schema.Entity('todos');



const todoListSchema = [ todoSchema ];

export const getTodos = (params) => 
  axios.get('/api/list', {params})
    .then(result => ({todos: normalize(result.data, todoListSchema)}))
    .catch(err => ({err}))