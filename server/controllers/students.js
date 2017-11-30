const Student 	= require('../models').student;
const Event 	= require('../models').event;
const EventStudent 	= require('../models').event_student;
const Country 	= require('../models').country;
const City 	= require('../models').city;

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
	eventStudentUpdate(req, res) {
		return EventStudent
			.findOne({where: {
				studentId: req.params.studentId,
				eventId: req.params.eventId,
			} })
			.then(
				studentEvent => {
					console.log(studentEvent);
					console.log(req.body)
					if(!studentEvent) return res.status(404).send({message: "Student Not Found![2]"});
					return studentEvent
						.update(req.body, { fields: Object.keys(req.body) })
						.then( updateDetail => res.status(200).send(studentEvent) )
						.catch( errorUpdate => res.status(400).send(errorUpdate) );
				}
			)
			.catch( error => res.status(404).send(error) );
	},
	index(req, res){
		let limit = 9;
		let offset = 0;
		let gender = req.query.gender || null;
		let country = req.query.country || null;
		let city = req.query.city || null;
		let page = req.params.page || 1;	
		console.log(page)
		return Student
			.findAndCountAll().then(data => {
				
				if(data.count/limit<page){
					page = 1;
				}
				let pages = Math.ceil(data.count /limit);
				offset = limit * (page -1);
				if(gender != null && country != null && city != null ){
					// gender, country, city specific search
					// gender, country specific search
					// gender, city specific search
					// country, city specific search
					// gender specific search
					// country specific search
					// city specific search
				} else if( gender != null){
					Student.findAll(
						{
							where: {
							type: {$ilike: '%' + req.query.gender + '%'}
							},
							include: [
							{model:Country},
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );					
				} else if( country != null){
					Student.findAll(
						{
							where: {
							location: {$ilike: '%' + req.query.country + '%'}
							},
							include: [
							{model:Country},
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );				
				} else if( city != null){
					Student.findAll(
						{
							where: {
							location: {$ilike: '%' + req.query.city + '%'}
							},
							include: [
							{model:Country},
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					.then(event => res.status(200).send(event) )
					.catch( error => res.status(400).send(error) );				
				} else {
					Student.findAll({
						include: [
							{model:Country},
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