const User 		= require('../models').user;
const Student 	= require('../models').student;
const Mentor 	= require('../models').mentor;
const Event 	= require('../models').event;
const EventStudent 	= require('../models').event_student;
const Country 	= require('../models').country;
const City 	= require('../models').city;
const passport 	= require('passport');
const jwt 		= require('jsonwebtoken');
const config	= require('../config/general');
const emailValidator = require('../config/emailValidator');

module.exports = {
	create(req, res){
		// console.log(User.find({where: { email:req.body.email}}))
		return User
			.find({
				where: { email: req.body.email }
			})
			.then(user => {
				if (req.body.tier === "admin" && req.body.setUpPass != "buffered07") {
					return res.status(400).send({message: 'Incorrect admin setup password'});
				};
				if (req.body.tier === "superadmin" && req.body.setUpPass != "buffered07") {
					return res.status(400).send({message: 'Incorrect super admin setup password'});
				};
				if (!user) {

					const link = emailValidator.createLink()
					let linkExpiry = new Date()
					linkExpiry.setDate(linkExpiry.getDate() + 1);

					User.create({
						email 	: req.body.email,
						username: req.body.username,
						password: req.body.password,
						link: link,
						link_expiry: linkExpiry,
						tier: req.body.tier
					})
					.then(user => {
						console.log(link);
						if(req.body.tier === 'student'){
							Country.findOne({
								where:{name:req.body.countryName},
							})
							.then( country =>{
								let $country = country.id
								Student.create({
									userId: user.id,
									firstName: req.body.firstName,
									lastName: req.body.lastName,
									countryId: $country,
									nickname: req.body.nickname,
									image: 'https://cdn4.iconfinder.com/data/icons/follower/512/login-man-person-human-body-512.png',
									schoolName: req.body.schoolName,
									gender: req.body.gender,
									dob: req.body.dob,
									mobileNumber: req.body.mobileNumber,
									googleSlides: req.body.googleSlides,
									googleDocs: req.body.googleDocs,
									microsoftOffice: req.body.microsoftOffice,
									willGoUni: req.body.willGoUni,
									desiredUniversity: req.body.desiredUniversity,
									graduationPlans: req.body.graduationPlans,
									heardThrough: req.body.heardThrough
								});
							})
							.catch()
						} else if (req.body.tier === 'mentor'){
							Country.findOne({
								where:{name:req.body.countryName},
							})
							.then( country =>{
								City.findOne({
									where:{name:req.body.cityName},
								})
								.then(city =>{
									let $country = country.id;
									let $city = city.id;

									Mentor.create({
									userId: user.id,
									firstName: req.body.firstName,
									lastName: req.body.lastName,
									countryId: $country,
									cityId: $city,
									mobileNumber: req.body.mobileNumber,
									companyName: req.body.companyName,
									industry: req.body.industry,
									title: req.body.title,
									participation: req.body.participation,
									about: req.body.about,
								})
							})
						})
						}
						emailValidator.send(link,req,user.dataValues.email)
						const token = jwt.sign({ user: user.id }, config.secret, {expiresIn: 24 * 60 * 60});
						res.status(200).send({
							token 	: token,
							id	: user.id,
							email	: user.email,
							tier: user.tier,
							firstName: req.body.firstName						
						});
					})
					.catch(error => res.status(400).send(error));
				}
				else {
					return res.status(400).send({message: 'Username / Email Already Exists'});
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
				return res.status(401).send({message: 'Login failed, please check your email or password'});
			}

			req.login(user, (err) => {
				if (err) return next(err);
				console.log("...",req);
				console.log("now check email",user.dataValues);

				const token = jwt.sign({ user: user.id }, config.secret, {expiresIn: 24 * 60 * 60});

				if(user.tier === 'student'){
					Student.findOne({
						where:{userId:user.id},
					})
					.then( student =>{
						return res.status(200).send({
							token 	: token,
							id	: user.id,
							email	: user.email,
							tier: user.tier,
							firstName: student.firstName
						});
					})
					.catch()
				} else if (user.tier === 'mentor'){
					Mentor.findOne({
						where:{userId:user.id},
					})
					.then( mentor =>{
						return res.status(200).send({
							token 	: token,
							id	: user.id,
							email	: user.email,
							tier: user.tier,
							firstName: mentor.firstName
						});
					})
					.catch()
				}
			});
		})(req, res, next);
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