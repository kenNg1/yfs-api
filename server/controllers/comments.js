const Post = require('../models').Post;
const User = require('../models').User;
const Comment = require('../models').Comment;

module.exports = {
	create(req, res){
		return Post
			.findById(req.params.postId)
			.then(
				post => {
					if(!post) return res.send(404, {message: "Post Not Found!"});

					return Comment
						.create({
							nickname: req.body.nickname,
							email	: req.body.email,
							site	: req.body.site,
							message	: req.body.message,
							post_id : req.params.postId,
							user_id : (!req.decoded.user) ? null : req.decoded.user
						})
						.then( comment => res.send(200, comment) )
						.catch( error => res.send(400, error) );
				}
			)
			.catch( error => res.send(400, error) );
	},

	update(req, res){
		return Comment
			.findById(req.params.commentId)
			.then(
				comment => {
					if(!comment) return res.send(404, {message: "Comment Not Found![2]"});

					return comment
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateComment => res.send(200, { message: "Comment has been Updated!" }) )
						.catch( errorUpdate => res.send(400, errorUpdate) );
				}
			)
			.catch( error => res.send(404, { message: "Comment Not Found![1]" }) );
	},

	destroy(req, res){
		return Comment
			.findById(req.params.commentId)
			.then(
				comment => {
					if(!comment) return res.send(404, {message: "Comment Not Found![2]"});

					return comment
						.destroy()
						.then( deleteComment => res.send(200, { message: "Comment has been Deleted!" }) )
						.catch( errorDelete => res.send(400, errorDelete) );
				}
			)
			.catch( error => res.send(404, { message: "Comment Not Found![1]" }) );
	},

	replay(req, res){
		return Post
			.findById(req.params.postId)
			.then(
				post => {
					if(!post) return res.send(404, {message: "Post Not Found!"});

					return Comment
						.findById(req.params.commentId)
						.then(
							parent => {
								if(!parent) return res.send(404, { message: "Comment to Replay not Found!" });

								return Comment
									.create({
										nickname: req.body.nickname,
										email	: req.body.email,
										site	: req.body.site,
										message	: req.body.message,
										post_id : req.params.postId,
										user_id : (!req.decoded.user) ? null : req.decoded.user,
										parent_id: req.params.commentId
									})
									.then( commentChild => res.send(200, commentChild) )
									.catch( errorChild => res.send(400, errorChild) );

							}
						)
						.catch( error => res.send(400, error) );
				}
			)
			.catch( error => res.send(400, error) );
	},

	postComment(req, res){
		return Comment
			.findAll({
				where: { post_id: req.params.postId },
				// hierarchy: true,
				// include: [{ model: Comment, as: 'Children' }]
			})
			.then( comment => {
				if (!comment) return res.send(404, { message: "Comments Not Found" });

				res.send(200, comment);
			})
			.catch( error => res.send(400, error) );
	}
};