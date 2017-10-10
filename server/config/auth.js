const jwt = require('jsonwebtoken');
const config = require('./general');
const User = require('../models').user;

module.exports = {
	IsAuthenticated(req, res, next) {
        console.log('reeq',req);
		const token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
		if (token) {
			jwt.verify(token, config.secret, (err, decoded) => {
				if (err) return res.status(400).send({success: false, message: 'Token is not Authentic. Check your token or Re-login to gain the New one.'})
				// console.log(decoded);
				req.decoded = decoded;
				next()
			});
		}
		else {
			return res.status(403).send({success: false, message: 'No token provided. Login again to gain a New token.'})
		}
	}
	/*,
	destroySession(req, res, next) {
		req.logOut();
		req.session.destroy();
		res.redirect('/');
	}*/
};