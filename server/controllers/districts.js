// const Detail = require('../models').Detail;
// const User = require('../models').User;
// const Comment = require('../models').Comment;
const District = require('../models').District;

module.exports = {
	create(req, res){
		return District
			.create({
				name: req.body.name,
				lat: req.body.lat,
				lng: req.body.lng,
			})
			.then(district => res.status(200).send(district))
			.catch(error => res.status(400).send(error));
	},

	update(req, res){
		return District
			.findById(req.body.user_id)
			.then(
				district => {
					console.log(district);
					console.log(req.body)
					if(!district) return res.status(404).send({message: "District Not Found![2]"});

					return district
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateDistrict => res.status(200).send(district) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},

	destroy(req, res){
		return District
			.findById(req.params.districtId)
			.then(
				district => {
					if(!district) return res.status(404).send({message: "District Not Found![2]"});

					return district
						.destroy()
						.then( deleteDistrict => res.status(200).send({ message: "District has been Deleted!" }) )
						.catch( errorDelete => res.status(400).send(errorDelete) );
				}
			)
			.catch( error => res.status(404).send({ message: "District Not Found![1]" }) );
	},

	index(req, res){
		return District
			.findAll()
			.then( district => {
				console.log(district)
				res.status(200).send(district)
			})
			.catch( error => res.status(400).send(error) );
	},
	
	show(req, res){
		return District
			.findById(req.params.districtId)
			.then(
				district => {
					if(!district) return res.status(404).send({ message: "District Not Found!" });

					return res.status(200).send(district);
				}
			)
			.catch( error => res.status(404).send({ message: "District Not Found!" }) );
	}
};