const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', `${__dirname}/templates`);

app.use(express.static(`${__dirname}/public`));

//routes
app.get('/', function(req,res){
  res.render('homepage/index');
})

app.get('/calendar', function(req, res){
  res.render('calendar/index');
})

app.get('/notes', function(req, res){
  res.render('notes/index');
})
