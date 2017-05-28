const express = require('express');

const router = express.Router();
const db = require('../db')
router.route('/list')
  .get((req, res) => {
    db.TodoList.findAll().then(result => {
      res.json(result);
    })
  });

  module.exports = router;