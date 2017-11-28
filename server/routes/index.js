const usersController = require('../controllers').users;
const adminsController = require('../controllers').admins;
const studentsController = require('../controllers').students;
const mentorsController = require('../controllers').mentors;
const eventsController = require('../controllers').events;
const sportsController = require('../controllers').sports;
const auth = require('../config/auth');
const emailValidator = require('../config/emailValidator');

module.exports = (app) => {
	app.get('/', (req, res) => res.status(200).send({
		message: "App up and running"
	}));

	app.get('/api', auth.IsAuthenticated, (req, res) => res.status(200).send({
		message: "Welcome to Unknow Post Api"
	}));

	// user route (auth.IsAuthenticated) for checking the token
	app.post('/register', usersController.create);
	app.get('/verify', usersController.validateEmail );
	app.post('/login',  usersController.login);
	app.post('/forgotpassword',  usersController.forgotPassword);
	app.post('/resetpassword',  usersController.resetPassword);
	
	app.post('/admin/register', adminsController.create);
	app.get('/admin/verify', adminsController.validateEmail );
	app.post('/admin/login',  adminsController.login);
	app.post('/admin/forgotpassword',  adminsController.forgotPassword);
	app.post('/admin/resetpassword',  adminsController.resetPassword);
	// auth is authenticated
	app.get('/admin/events/:type', eventsController.indexType); // all post list route

	app.get('/check-state', auth.IsAuthenticated, (req, res) => {
		let content = {
		success: true,
		message: 'Successfully logged in'
		}
		res.send(content);
	});

	// is this necessary?? app.get('/signout', auth.IsAuthenticated, auth.destroySession);
	// probs don't need profile api as we get the details another way... 
	app.get('/api/students/:studentId', studentsController.profile);
	app.put('/api/students/:studentId', studentsController.profileUpdate);

	app.get('/api/mentors/:mentorId', mentorsController.profile);
	app.put('/api/mentors/:mentorId', mentorsController.profileUpdate);

	// All events routes
	// fix the , auth.IsAuthenticated , bit
	app.post('/api/events/', eventsController.create); // new post route
	app.put('/api/events/:eventId', eventsController.update); // update post route
	app.delete('/api/events/:eventId', eventsController.destroy); // delete post route
	// app.get('/api/events/:page?', eventsController.queryIndex, eventsController.index); // all post list route
	app.get('/api/events/:page?', eventsController.index); // all post list route
	app.get('/api/event/:eventId', eventsController.show); // get post content by id route

	// All sports routes
	// fix the , auth.IsAuthenticated , bit
	app.post('/api/sports/', sportsController.create); // new post route
	app.put('/api/sports/:sportId', sportsController.update); // update post route
	app.delete('/api/sports/:sportId', sportsController.destroy); // delete post route
	app.get('/api/sports/', sportsController.index); // all post list route
	app.get('/api/sports/:sportId', sportsController.show); // get post content by id route

};