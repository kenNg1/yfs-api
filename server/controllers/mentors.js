const Mentor 	= require('../models').mentor;
const Event 	= require('../models').event;
const EventMentor 	= require('../models').events_mentor;
const Country 	= require('../models').country;
const City 	= require('../models').city;

module.exports = {
	// below api not really needed?
	profile(req, res, next) {
		EventMentor.findAll({
			where: { mentorId: req.params.mentorId },
			include: [{model:Event}]					
		})
		.then(events => {
			return Mentor
				.findById(req.params.mentorId, {
					include: [
							{model: Country},
							{model: City},
					]
				})
				.then(
					mentor => {

						mentor.dataValues.EventsEnrolled = events;
					
						if (!mentor) {
							return res.status(400).send({success: false, message: 'User not Found'});
						}
						
						// const data = {
						// 	id: user.id,
						// 	username: user.username,
						// 	email: user.email
						// }
						return res.status(200).send({mentor});

				})
				.catch(error => res.status(400).send(error));
			} )
			.catch( error => console.log(error) );
	},
	profileUpdate(req, res, next) {
		return Mentor
			.findById(req.params.mentorId, {
				include: [
						{model: Country},
						{model: City}
				]
			})
			.then(
				mentor => {
					console.log(mentor);
					console.log(req.body)
					if(!mentor) return res.status(404).send({message: "Mentor Not Found![2]"});
					return mentor
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateDetail => res.status(200).send(mentor) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},
};