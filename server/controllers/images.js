// const Detail = require('../models').Detail;
// const User = require('../models').User;
// const Comment = require('../models').Comment;
const Image = require('../models').image;

module.exports = {
	create(req, res){
		return Image.create({
				dateTaken: req.body.dateTaken,
				description: req.body.description,
				imageUrl: req.body.imageUrl
			})
			.then(image => res.status(200).send(image))
			.catch(error => res.status(400).send(error));
	},

	update(req, res){
		return Image
			.findById(req.params.imageId)
			.then(
				image => {
					console.log(image);
					console.log(req.body)
					if(!image) return res.status(404).send({message: "Image Not Found![2]"});

					return image
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateImage => res.status(200).send(image) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},

	destroy(req, res){
		return Image
			.findById(req.params.imageId)
			.then(
				image => {
					if(!image) return res.status(404).send({message: "Image Not Found![2]"});

					return image
						.destroy()
						.then( deleteImage => res.status(200).send({ message: "Image has been Deleted!" }) )
						.catch( errorDelete => res.status(400).send(errorDelete) );
				}
			)
			.catch( error => res.status(404).send({ message: "Image Not Found![1]" }) );
	},

	index(req, res){
		return Image
			.findAll()
			.then( image => {
				console.log(image)
				res.status(200).send(image)
			})
			.catch( error => res.status(400).send(error) );
	},
	
	show(req, res){
		return Image
			.findById(req.params.imageId)
			.then(
				image => {
					if(!image) return res.status(404).send({ message: "Image Not Found!" });

					return res.status(200).send(image);
				}
			)
			.catch( error => res.status(404).send({ message: "Image Not Found!" }) );
	}
};