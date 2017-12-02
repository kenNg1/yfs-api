const Admin 		= require('../models').admin;
const passport 	= require('passport');
const jwt 		= require('jsonwebtoken');
const config	= require('../config/general');
const emailValidator = require('../config/emailValidator');

module.exports = {
	create(req, res){
		// console.log(Admin.find({where: { email:req.body.email}}))
		return Admin
			.find({
				where: { email: req.body.email }
			})
			.then(admin => {
				if (!admin) {
					const link = emailValidator.createLink()
					let linkExpiry = new Date()
					linkExpiry.setDate(linkExpiry.getDate() + 1);
					
					Admin.create({
						email 	: req.body.email,
						username: req.body.username,
						password: req.body.password,
						link: link,
						link_expiry: linkExpiry
					})
					.then(admin => {
						emailValidator.send(link,req,admin.dataValues.email)
						return admin
					})
					.then(admin => {
						const token = jwt.sign({ user: admin.id }, config.secret, {expiresIn: 24 * 60 * 60});
						res.status(200).send({
							token 	: token,
							id	: admin.id,
							email	: admin.email,
							tier: admin.tier
						});
					});
				}
				else {
					return res.status(400).send({message: 'An admin with this email already exists'});
				}
			})
			.catch(error => res.status(400).send(error));
	},
	login(req, res, next) {
		passport.authenticate('local', (err, admin, info) => {
			console.log("info",info);

			if (err) {
				return next(err);
			}

			if (!admin) {
				return res.status(401).send({message: 'authentication failed'});
			}

			req.login(admin, (err) => {
				if (err) return next(err);
				console.log("now check email",admin.dataValues);

				const token = jwt.sign({ user: admin.id }, config.secret, {expiresIn: 24 * 60 * 60});
				return res.status(200).send({
					token 	: token,
					id	: admin.id,
					email	: admin.email,
					tier: admin.tier
				});
			});
		})(req, res, next);
	},
	forgotPassword(req,res,next){
		return Admin
		.find({
			where: { email: req.body.email }
		}).then(admin =>{
			if(!admin){
				return res.status(400).send({success: false, message: 'Admin not Found'});
			}
			emailValidator.reset(admin.link,req,admin.email)
			return res.status(200).send(admin.tier);
		})
	},
	resetPassword(req,res,next){
		return Admin
		.find({
			where: { link: req.query.id }
		}).then(admin =>{
			if(!admin){
				return res.status(400).send({success: false, message: 'Reset link invalid'});
			}
			const link = emailValidator.createLink()
			
			admin
			.update({ password: req.body.password,link: link}).then(()=>{
				return res.status(200).send({success: true, message: 'Password successfully reset'});
			})			
		})
	},
	validateEmail(req, res, next) {
		return Admin
			.find({
				where:{ link: req.query.id}
				})
			.then(admin => {
				if (!admin) {
					return res.status(400).send({success: false, message: 'Email validation link invalid, you must already have been verified. Try logging in again'});
				} 
								
				const now = Date.now();
				if (now>admin.link_expiry){
					return res.status(400).send({success: false, message: 'Link expired'});					
				}

				const data = {
					id: admin.id,
					username: admin.username,
					email: admin.email
				}
				const link = emailValidator.createLink()
				
				admin
				.update({ validEmail: true, link: link}).then(()=>{
					return res.status(200).send(data);
				})

			})
			.catch(error => res.status(400).send(error));
	}
};