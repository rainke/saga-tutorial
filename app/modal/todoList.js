module.exports = function(sequelize, Sequelize) {
  return sequelize.define('todo_list', {
    text: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    completed: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  })
}