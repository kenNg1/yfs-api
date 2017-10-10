const Event = require('../models').Event;
const User = require('../models').User;
const Detail = require('../models').Detail;
const District = require('../models').District;
const Sport = require('../models').Sport;
// const Comment = require('../models').Comment;

module.exports = {
	create(req, res){
		return Event
			.create({
				// post_type	: (!req.body.post_type ? 'post' : req.body.post_type),
				name: req.body.name,
				description: req.body.description,
				level: req.body.level,
				intensity: req.body.intensity,
				terrain: req.body.terrain,
				min_ppl: req.body.min_ppl,
				max_ppl: req.body.max_ppl,
				price: req.body.price,
				sportswear: req.body.sportswear,
				gear: req.body.gear,
				org_description: req.body.org_description,
				org_website: req.body.org_website,
				imageUpload: req.body.imageUpload,
				videoUpload: req.body.videoUpload,
				date: req.body.date,
				time: req.body.time,
				address: req.body.address,
				district_id		: req.body.district_id || req.decoded.user,
				sport_id		: req.body.sport_id || req.decoded.user,
				user_id		: req.body.user_id || req.decoded.user
			})
			.then(event => res.status(200).send(event))
			.catch(error => res.status(400).send(error));
	},

	update(req, res){
		return Event
			.findById(req.body.id, {
				include: [
					{
					 model: User,
					 include: [
						{model: Detail}
					 ]  
					}
				]
			})
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

		// def index
    // @events = Event.all
    // if params[:name]
    //   @sports = []
    //   Sport.search(params[:name]).each do |sport|
    //     @sports.push(sport.name)
    //   end 
    //   @events = Event.search(params[:name])
    // else
    //   @events = Event.all
    // end
    // render json: {:events=>@events.as_json(:include => [:district, {:user=>{
    //                                                       :include => :detail}}, {:sport=> {:only => :name }}]),
	// 			  :sports=>@sports.as_json()}
	// end

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
		return Event
			.findAll({include: [
				{model: District},
				{model:User, attributes: ['id'], include: [{model: Detail}]},
				// {model:User, include: [{model: Detail}]},
			]})
			.then(event => res.status(200).send(event) )
			.catch( error => res.status(400).send(error) );
	},

	show(req, res){
		return Event
			.findById(req.params.eventId, {
				include: [
					{
					 model: User,
					 include: [
						{model: Detail}
					 ]  
					}
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