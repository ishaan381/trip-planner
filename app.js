var Express = require('express');
var app = new Express();

var bodyParser = require('body-parser');
var morgan = require('morgan');

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
swig.setDefaults({ cache: false });


app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})

app.us(function(err, req,res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.render();
})
