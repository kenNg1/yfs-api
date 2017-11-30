const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').user;
const Admin = require('../models').admin;

module.exports = (passport) => {
	// Serializing user session
	
	passport.serializeUser((user, done) => {		
		done(null, user);
	});

	// Deserializing user session
	passport.deserializeUser((user, done) => {
		User.find({where: {id: user.id}})
			.success((user) => {
				done(null, user);
			})
			.error((err) => {
				done(err, null);
			});
	});

	// Authenticating User Login
	passport.use(new LocalStrategy(
		(username, password, done) => {
			User.findOne({where: {email: username} })
				.then((user) => {
					if (user) {
						passwd = user ? user.password : '';
						User.validPassword(password, passwd, (err, isMatch) => {
							if (err) return done(err);
							if (!isMatch) return done(null, false, {message: 'Incorrect Password'});

							return done(null, user);
						});
					}
					Admin.findOne({where:{email:username}})
						.then((admin)=>{
							if(admin){
								passwd = admin ? admin.password : '';
								Admin.validPassword(password, passwd, (err, isMatch) => {
									if (err) return done(err);
									if (!isMatch) return done(null, false, {message: 'Incorrect Password'});
									return done(null, admin);
								});
						 } else {
							return done(null, false, {message: 'Incorrect Username'});
						}})		
						.catch((err) => {
							return done(null, false, {message: 'Incorrect Username'})
						});			
				})
				.catch((err) => {
					return done(null, false, {message: 'Incorrect Username'})
				});
		}
	));
};