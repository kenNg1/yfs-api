const User 		= require('../models').user;
const Student 	= require('../models').student;
const passport 	= require('passport');
const jwt 		= require('jsonwebtoken');
const config	= require('../config/general');
const emailValidator = require('../config/emailValidator');

module.exports = {
	create(req, res){
		return User
			.find({
				where: { email: req.body.email }
			})
			.then(user => {
				if (!user) {
					const link = emailValidator.createLink()
					let linkExpiry = new Date()
					linkExpiry.setDate(linkExpiry.getDate() + 1);
					
					User.create({
						email 	: req.body.email,
						username: req.body.username,
						password: req.body.password,
						link: link,
						link_expiry: linkExpiry
					})
					.then(user => {
						console.log(link);
						if(req.body.tier === 'student')
						Student.create({
							user_id: user.id,
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							country: req.body.country,
							nickname: req.body.nickname,
							image: 'https://cdn4.iconfinder.com/data/icons/follower/512/login-man-person-human-body-512.png',
							schoolName: req.body.schoolName,
							gender: req.body.gender,
							dob: req.body.dob,
							mobileNumber: req.body.mobileNumber,
							googleSlides: req.body.googeSlides,
							googleDocs: req.body.googeDocs,
							microsoftOffice: req.body.microsoftOffice,
							willGoUni: req.body.willGoUni,
							desiredUniversity: req.body.desiredUniversity,
							graduationPlans: req.body.graduationPlans,
							heardThrough: req.body.heardThrough
						})
						return user;
					})
					.then(user => {
						emailValidator.send(link,req,user.dataValues.email)
						return user
					})
						// module to validate email

					.then(user => {
						const token = jwt.sign({ user: user.id }, config.secret, {expiresIn: 24 * 60 * 60});
						res.status(200).send({
							token 	: token,
							id	: user.id,
							email	: user.email,
							username: user.username
						});
					});
				}
				else {
					return res.status(400).send({message: 'Username / Email is Already Exist'});
				}
			})
			.catch(error => res.status(400).send(error));
	},
	login(req, res, next) {
		passport.authenticate('local', (err, user, info) => {
			console.log("info",info);

			if (err) {
				return next(err);
			}

			if (!user) {
				return res.status(401).send({message: 'authentication failed'});
			}

			req.login(user, (err) => {
				if (err) return next(err);
				console.log("now check email",user.dataValues);

				const token = jwt.sign({ user: user.id }, config.secret, {expiresIn: 24 * 60 * 60});
				return res.status(200).send({
					token 	: token,
					id	: user.id,
					email	: user.email
				});
			});
		})(req, res, next);
	},
	// below api not really needed?
	profile(req, res, next) {
		return User
			.findById(req.params.userId)
			.then(user => {
				if (!user) {
					return res.status(400).send({success: false, message: 'User not Found'});
				}
				
				const data = {
					id: user.id,
					username: user.username,
					email: user.email
				}
				return res.status(200).send(data);

			})
			.catch(error => res.status(400).send(error));
	},
	forgotPassword(req,res,next){
		return User
		.find({
			where: { email: req.body.email }
		}).then(user =>{
			if(!user){
				return res.status(400).send({success: false, message: 'User not Found'});
			}
			emailValidator.reset(user.link,req,user.email)
			return res.status(200).send(user.tier);
		})
	},
	resetPassword(req,res,next){
		return User
		.find({
			where: { link: req.query.id }
		}).then(user =>{
			if(!user){
				return res.status(400).send({success: false, message: 'Reset link invalid'});
			}
			const link = emailValidator.createLink()
			
			user
			.update({ password: req.body.password,link: link}).then(()=>{
				return res.status(200).send({success: true, message: 'Password successfully reset'});
			})			
		})
	},
	validateEmail(req, res, next) {
		return User
			.find({
				where:{ link: req.query.id}
				})
			.then(user => {
				if (!user) {
					return res.status(400).send({success: false, message: 'Email validation link invalid, you must already have been verified. Try logging in again'});
				} 
								
				const now = Date.now();
				if (now>user.link_expiry){
					return res.status(400).send({success: false, message: 'Link expired'});					
				}

				const data = {
					id: user.id,
					username: user.username,
					email: user.email
				}
				const link = emailValidator.createLink()
				
				user
				.update({ validEmail: true, link: link}).then(()=>{
					return res.status(200).send(data);
				})

			})
			.catch(error => res.status(400).send(error));
	}
};