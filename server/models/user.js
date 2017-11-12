//need to add extra fields

const bcrypt = require('bcryptjs'); 
const config = require('../config/general');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isLowercase: true,
				notEmpty: true,
				isEmail: true
			}
		},
		salt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		tier: {
			type: DataTypes.STRING
		},
		link: {
			type: DataTypes.STRING,
			allowNull: false
		},
		validEmail: {
			type: DataTypes.BOOLEAN
  		},
		link_expiry: {
			type: DataTypes.DATE,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true
			}
		},
		sign_in_count: {
			type: DataTypes.INTEGER,
			defaultValue: 0
		},
		current_sign_in_at: {
			type: DataTypes.DATE,
		},
		last_sign_in_at: {
			type: DataTypes.DATE,
		},
		current_sign_in_ip: {
			type: DataTypes.STRING,
		},
		last_sign_in_ip: {
			type: DataTypes.STRING,
		}
	}, {
		// schema: 'admin',
		classMethods: {
			validPassword: (password, passwd, done) => {
				const tmppass = password + config.secret;
				bcrypt.compare(tmppass, passwd, (err, isMatch) => {
					if (err) return done(err);
					done(null, isMatch);
				});
			},
			associate: (models) => {
				User.hasOne(models.Student, { foreignKey: 'userId'});
			}
		}
	});

	User.beforeCreate( (user, options, done) => {
		bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
			if (err) return done(err);
			const tmppass = user.password + config.secret;
			bcrypt.hash(tmppass, salt, (err, hash) => {
				console.log("salty",salt)			
				console.log("hashy",hash)			
				if (err) return done(err);
				user.salt 		= salt;
				user.password 	= hash;
				return done(null, user);
			});
		});
	});

	User.beforeUpdate( (user, options, done) => {
		bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
			if (err) return done(err);
			const tmppass = user.password + config.secret;
			bcrypt.hash(tmppass, salt, (err, hash) => {
				if (err) return done(err);
				user.salt 		= salt;
				user.password 	= hash;
				return done(null, user);
			});
		});
	});

	return User;
}; 