const Student 	= require('../models').student;
const Event 	= require('../models').event;
const EventStudent 	= require('../models').event_student;
const Country 	= require('../models').country;

module.exports = {
	// below api not really needed?
	profile(req, res, next) {
		EventStudent.findAll({
			where: { student_id: req.params.studentId },
			include: [{model:Event}]					
		})
		.then(events => {
			return Student
				.findById(req.params.studentId, {
					include: [
							{model: Country}
					]
				})

				.then(
					student => {

						student.dataValues.EventsEnrolled = events;
					
						if (!student) {
						return res.status(400).send({success: false, message: 'User not Found'});
						}
					
						// const data = {
						// 	id: user.id,
						// 	username: user.username,
						// 	email: user.email
						// }
						return res.status(200).send({student});

				})
				.catch(error => res.status(400).send(error));
			} )
			.catch( error => console.log(error) );
	},
	profileUpdate(req, res, next) {
		return Student
			.findById(req.params.studentId, {
				include: [
						{model: Country}
				]
			})
			.then(
				student => {
					console.log(student);
					console.log(req.body)
					if(!student) return res.status(404).send({message: "Student Not Found![2]"});
					return student
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateDetail => res.status(200).send(student) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},
};