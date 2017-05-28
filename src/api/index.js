import axios from 'axios';

export const getTodoList = (params) => 
  axios.get('/api/list', {params})
    .then(result => result.data);