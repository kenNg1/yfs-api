// Import Dependencies
const express = require('express');

const bodyParser = require('body-parser');
var cors = require('cors');

const logger	= require('morgan');
const passport	= require('passport');
const jwt		= require('jsonwebtoken');
	
// Setting up the server
const app = express();

/*------------------Routing Started ------------------------*/

// app.get('/',function(req,res){
//     // console.log(__dirname, '/', 'index.html');
//     res.sendFile('index.html' , { root : __dirname});
    
//     // res.sendFile(path.join(__dirname, '/', 'index.html'));
//     // /Users/kenng/qwertup/yfs/index.html
// });



/*--------------------Routing Over----------------------------*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

require('./server/config/passport')(passport);

// Hashing wrk factor
SALT_WORK_FACTOR = 12;

app.use(cors({origin:true,credentials: true}));

// Running up the passport
app.use(passport.initialize());

// initializing the route to the app
require('./server/routes')(app);

// comment this out during development mode
// app.use(express.static('dist'))

// setting up the port
const port = parseInt(process.env.PORT, 10) || '8000';
// const port = parseInt(process.env.PORT, 10) || '3000';
app.listen(port);

module.exports = app;