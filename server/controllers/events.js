const Event = require('../models').Event;
const User = require('../models').User;
const Country = require('../models').Country;
const City = require('../models').City;
const Detail = require('../models').Detail;
const District = require('../models').District;
const Sport = require('../models').Sport;
// const Comment = require('../models').Comment;

module.exports = {
	create(req, res){
		return Event
			.create({
				name: req.body.name,
				image: req.body.image,    
				location: req.body.location,    
				shortInfo: req.body.shortInfo,
				date: req.body.date,
				time: req.body.time,
				price: req.body.price,
				city: req.body.city,
				type: req.body.type,
				deadline: req.body.deadline,
				students: req.body.students,
				studentsMax: req.body.studentsMax,
				fixedMentors: req.body.fixedMentors,
				fixedMentorsMax: req.body.fixedMentorsMax,
				floatingMentors: req.body.floatingMentors,
				floatingMentorsMax: req.body.floatingMentorsMax,
				notice: req.body.notice,
				longInfo: req.body.longInfo,
				cityId	: req.body.cityId,
				countryId: req.body.countryId,
				status: req.body.status,
			})
			.then(event => res.status(200).send(event))
			.catch(error => res.status(400).send(error));
	},

	update(req, res){
		return Event
			.findById(req.body.id)
			.then(
				event => {
					console.log(event);
					console.log(req.body)
					if(!event) return res.status(404).send({message: "Event Not Found![2]"});

					return event
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateEvent => res.status(200).send(event) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},

	destroy(req, res){
		return Event
			.findById(req.params.eventId)
			.then(
				event => {
					if(!event) return res.status(404).send({message: "Event Not Found![2]"});

					return event
						.destroy()
						.then( deleteEvent => res.status(200).send({ message: "Event has been Deleted!" }) )
						.catch( errorDelete => res.status(400).send(errorDelete) );
				}
			)
			.catch( error => res.status(404).send({ message: "Event Not Found![1]" }) );
	},

	queryIndex(req, res, next){
		if(req.query['name']){
			// code
			return Event
			.findAll({
				where: {
					name: {$ilike: '%' + req.query['name'] + '%'}
				},
				include: [
				{model: District},
				{model:User, attributes: ['id'], include: [{model: Detail}]},
				// {model:User, include: [{model: Detail}]},
			]})
			.then(event => {
				Sport.findAll({
					where: {
						name: {$ilike: '%' + req.query['name']+ '%'}
					},
					attributes: ['id','name']
				})
					.then(sport => {
						let obj = {};
						obj.sports = sport;
						obj.events = event;
						res.status(200).send(obj)
					})
					.catch(error => res.status(400).send(error))
			 })
			.catch( error => res.status(400).send(error) );
		} else {
			next()
		}
	},

	index(req, res){
		let limit = 9;
		let offset = 0;
		let type = req.params.type || null;
		let location = req.params.location || null;
		let page = req.params.page || 1;	
		console.log(page)
		return Event
			.findAndCountAll().then(data => {
				
				if(data.count/limit<page){
					page = 1;
				}
				let pages = Math.ceil(data.count /limit);
				offset = limit * (page -1);
				if(type != null && location != null ){
					
				} else if( type != null){

				} else if( location != null){

				}

				Event.findAll(
					{include: [
						{model:Country},
						{model:City},],
					limit: limit,
					offset: offset,
					// where: {
					// 	type: type,
					// 	location: {$ilike: '%' + req.params.location + '%'}
					// }
				})
				
			.then(event => res.status(200).send(event) )
			.catch( error => res.status(400).send(error) );
	})
	}
	,

	show(req, res){
		console.log(req.params)
		return Event
			.findById(req.params.eventId, {
				include: [
					{model:Country},
					{model:City},
				]
			})
			.then(
				event => {
					if(!event) return res.status(404).send({ message: "Event Not Found!" });

					return res.status(200).send(event);
				}
			)
			.catch( error => res.status(404).send({ message: "Event Not Found!" }) );
	}
};