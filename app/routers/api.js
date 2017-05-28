const express = require('express');

const router = express.Router();
const db = require('../db')
router.route('/list')
  .get((req, res) => {
    const { filter } = req.query;
    const where = {};
    if(filter === 'completed') {
      where.completed = true;
    } 
    if(filter === 'active') {
      where.completed = false;
    }
    db.TodoList.findAll({
      where
    }).then(result => {
      res.json(result);
    })
  });

  module.exports = router;