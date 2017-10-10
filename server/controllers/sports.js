// const Detail = require('../models').Detail;
// const User = require('../models').User;
// const Comment = require('../models').Comment;
const Sport = require('../models').Sport;

module.exports = {
	create(req, res){
		return Sport
			.create({
				name: req.body.name,
				description: req.body.description,
				rules: req.body.rules,
				sportsExternalUrl: req.body.sportsExternalUrl,
				imageUrl: req.body.imageUrl
			})
			.then(sport => res.status(200).send(sport))
			.catch(error => res.status(400).send(error));
	},

	update(req, res){
		return Sport
			.findById(req.body.user_id)
			.then(
				sport => {
					console.log(sport);
					console.log(req.body)
					if(!sport) return res.status(404).send({message: "Sport Not Found![2]"});

					return sport
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateSport => res.status(200).send(sport) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},

	destroy(req, res){
		return Sport
			.findById(req.params.sportId)
			.then(
				sport => {
					if(!sport) return res.status(404).send({message: "Sport Not Found![2]"});

					return sport
						.destroy()
						.then( deleteSport => res.status(200).send({ message: "Sport has been Deleted!" }) )
						.catch( errorDelete => res.status(400).send(errorDelete) );
				}
			)
			.catch( error => res.status(404).send({ message: "Sport Not Found![1]" }) );
	},

	index(req, res){
		return Sport
			.findAll()
			.then( sport => {
				console.log(sport)
				res.status(200).send(sport)
			})
			.catch( error => res.status(400).send(error) );
	},
	
	show(req, res){
		return Sport
			.findById(req.params.sportId)
			.then(
				sport => {
					if(!sport) return res.status(404).send({ message: "Sport Not Found!" });

					return res.status(200).send(sport);
				}
			)
			.catch( error => res.status(404).send({ message: "Sport Not Found!" }) );
	}
};