const Sequelize = require('sequelize');

const db = require('./db');


const express = require('express');
const app = express();


app.use('/api', require('./routers/api'));
app.use('/', require('./routers'));

app.use((req, res) => {
  res.status(404).send('not found');
});
app.use((err,req,res,next) => {
  res.status(500).send('Something broke!');
})

db.sequelize
  .sync({force: false}).then(function(){
    console.log('connection successfully');
    // db.TodoList.create({
    //   text: 'learn sql'
    // })
  })



app.listen(8081, () => {
  console.log('the server starts on port 8081')
});