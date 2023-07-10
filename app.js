// load express module
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// load handlebar into module


// set app to use handlebar engine
// app.set('view engine', 'handlebars');
app.set('view engine', 'hbs');


// set handlebar configurations
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  //new configuration parameter
  defaultLayout: 'planB',
  partialsDir: __dirname + '/views/partials/'
}));

// serves static import, import css file
app.use(express.static('public'));

//Sets a basic route
app.get('/', (req, res) => {
  // instead of res.render('main', {layout : 'index'});
  res.render('main');
});

app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  //new configuration parameter
  defaultLayout: 'planB',
  }));
  app.get('/', (req, res) => {
  //instead of res.render('main', {layout: 'index'});
  res.render('main');
});


//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port 
${port}`));