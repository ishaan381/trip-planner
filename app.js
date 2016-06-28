var Express = require('express');
var app = new Express();
var swig = require ('swig');
var path = require('path');

var bodyParser = require('body-parser');
var morgan = require('morgan');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });


app.use(morgan('dev'));

app.use(Express.static(path.join(__dirname, './public')));
app.use(Express.static(path.join(__dirname, './node_modules/bootstrap/dist')));
app.use(Express.static(path.join(__dirname, './node_modules/jquery/dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', require('./routes'));

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.use(function(err, req,res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render('error');
})

app.listen(3000, function (){
  console.log('listening');
})
