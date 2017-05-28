'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'hp900516', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = {
  sequelize,
  TodoList: sequelize.import('../modal/todoList.js')
}