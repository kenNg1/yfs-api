const Detail = require('../models').Detail;
const User = require('../models').User;
// const Comment = require('../models').Comment;

module.exports = {
	create(req, res){
		return Detail
			.create({
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
				user_id		: req.body.user_id || req.decoded.user
				
			})
			.then(detail => res.status(200).send(detail))
			.catch(error => res.status(400).send(error));
	},

	update(req, res){
		return Detail
			.findById(req.body.user_id)
			.then(
				detail => {
					console.log(detail);
					console.log(req.body)
					if(!detail) return res.status(404).send({message: "Detail Not Found![2]"});

					return detail
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateDetail => res.status(200).send(detail) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},

	destroy(req, res){
		return Detail
			.findById(req.params.detailId)
			.then(
				detail => {
					if(!detail) return res.status(404).send({message: "Detail Not Found![2]"});

					return detail
						.destroy()
						.then( deleteDetail => res.status(200).send({ message: "Detail has been Deleted!" }) )
						.catch( errorDelete => res.status(400).send(errorDelete) );
				}
			)
			.catch( error => res.status(404).send({ message: "Detail Not Found![1]" }) );
	},

	index(req, res){
		return Detail
			.findAll()
			.then( detail => res.status(200).send(detail) )
			.catch( error => res.status(400).send(error) );
	},

	show(req, res){
		return Detail
			.findById(req.params.detailId)
			.then(
				detail => {
					if(!detail) return res.status(404).send({ message: "Detail Not Found!" });

					return res.status(200).send(detail);
				}
			)
			.catch( error => res.status(404).send({ message: "Detail Not Found!" }) );
	}
};