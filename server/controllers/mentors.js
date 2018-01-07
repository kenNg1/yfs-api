const Mentor 	= require('../models').mentor;
const Event 	= require('../models').event;
const EventMentor 	= require('../models').event_mentor;
const Country 	= require('../models').country;
const City 	= require('../models').city;

module.exports = {
	// below api not really needed?
	profile(req, res, next) {
			return Mentor
				.findOne({
					where: {userId:req.params.userId}, 
					include: [
							{model: Country},
							{model: City},
							{model:Event}
					]
				})
				.then(
					mentor => {
					
						if (!mentor) {
							return res.status(400).send({success: false, message: 'Mentor not Found'});
						}
						
						return res.status(200).send(mentor);

				})
				.catch(error => res.status(400).send(error));

	},
	profileUpdate(req, res, next) {
		return Mentor
			.findOne({
				where: {user_id:req.params.userId}, 
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
						.then( updateDetail => {
							
							res.status(200).send(mentor)
						 } )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send({message:'error!!'}) );
	},
	getCountries(req, res) {
		return Country
			.findAll({
				attributes: { exclude: ['id'] }
			})
			.then(
				countries => {

					return res.status(200).send(countries) 
				}
			)
			.catch( error => res.status(404).send(error) );
	},
	eventMentorUpdate(req, res) {
		return EventMentor
			.findOne({where: {
				mentorId: req.params.mentorId,
				eventId: req.params.eventId,
			} })
			.then(
				mentorEvent => {
					console.log(mentorEvent);
					console.log(req.body)
					if(!mentorEvent) return res.status(404).send({message: "Mentor Not Found![2]"});
					return mentorEvent
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateDetail => res.status(200).send(mentorEvent) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},
	index(req, res){
		let limit = 9;
		let offset = 0;
		let industry = req.query.industry || null;
		let role = req.query.role || null;
		let country = req.query.country || null;
		let city = req.query.city || null;
		let page = req.params.page || 1;	
		console.log(page)
		return Mentor
			.findAndCountAll().then(data => {
				
				if(data.count/limit<page){
					page = 1;
				}
				let pages = Math.ceil(data.count /limit);
				offset = limit * (page -1);
				if(role != null && industry != null && country != null && city != null ){
					// industry, role, country, city specific search
					// industry, country specific search
					// role, city specific search
					// country, city specific search
					// industry specific search
					// role specific search
					// country specific search
					// city specific search
				} else if( role != null){
					Mentor.findAll(
						{
							where: {
							role: {$ilike: '%' + req.query.role + '%'}
							},
							include: [
							{model:Country},
							{model:City},							
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );					
				} else if( industry != null){
					Mentor.findAll(
						{
							where: {
							industry: {$ilike: '%' + req.query.industry + '%'}
							},
							include: [
							{model:Country},
							{model:City},							
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );					
				} else if( country != null){
					Mentor.findAll(
						{
							where: {
							country: {$ilike: '%' + req.query.country + '%'}
							},
							include: [
							{model:Country},
							{model:City},							
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );				
				} else if( city != null){
					Mentor.findAll(
						{
							where: {
							city: {$ilike: '%' + req.query.city + '%'}
							},
							include: [
							{model:Country},
							{model:City},
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );				
				} else {
					Mentor.findAll({
						include: [
							{model:Country},
							{model:City},							
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					
				.then(event => res.status(200).send(event) )
				.catch( error => res.status(400).send(error) );
				}
	})
	}
};