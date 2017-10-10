const Post = require('../models').Post;
const User = require('../models').User;
const Comment = require('../models').Comment;

module.exports = {
	create(req, res){
		return Post
			.create({
				title		: req.body.title,
				slug		: req.body.slug,
				short_desc 	: req.body.short_desc,
				content_post: req.body.content_post,
				post_type	: (!req.body.post_type ? 'post' : req.body.post_type),
				user_id		: req.decoded.user
			})
			.then(post => res.send(200, post))
			.catch(error => res.send(400, error));
	},

	update(req, res){
		return Post
			.findById(req.params.postId)
			.then(
				post => {
					if(!post) return res.send(404, {message: "Post Not Found![2]"});

					return post
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updatePost => res.send(200, { message: "Post has been Updated!" }) )
						.catch( errorUpdate => res.send(400, errorUpdate) );
				}
			)
			.catch( error => res.send(404, { message: "Post Not Found![1]" }) );
	},

	destroy(req, res){
		return Post
			.findById(req.params.postId)
			.then(
				post => {
					if(!post) return res.send(404, {message: "Post Not Found![2]"});

					return post
						.destroy()
						.then( deletePost => res.send(200, { message: "Post has been Deleted!" }) )
						.catch( errorDelete => res.send(400, errorDelete) );
				}
			)
			.catch( error => res.send(404, { message: "Post Not Found![1]" }) );
	},

	list(req, res){
		return Post
			.findAll()
			.then( post => res.send(200, post) )
			.catch( error => res.send(400, error) );
	},

	content(req, res){
		return Post
			.findById(req.params.postId, {
				include: [{ model: Comment, as: 'PostComment' }]
			})
			.then(
				post => {
					if(!post) return res.send(404, { message: "Post Not Found!" });

					return res.send(200, post);
				}
			)
			.catch( error => res.send(404, { message: "Post Not Found!" }) );
	}
};