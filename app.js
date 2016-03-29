var express = require('express');
var session = require('express-session');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/beer-tracker');
var db = mongoose.connection;
var app = express();
var router = express.Router();

// Use express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', null);
    next();
});

var beerController = require('./routes/beer');
router.route('/beer')
	.get(beerController.get)
	.post(beerController.post);
router.route('/beer/:id')
	.put(beerController.put)
	.delete(beerController.delete);

app.use('/', router);

app.listen(3000);