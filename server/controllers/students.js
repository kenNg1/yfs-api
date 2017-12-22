const Student 	= require('../models').student;
const Event 	= require('../models').event;
const EventStudent 	= require('../models').event_student;
const Country 	= require('../models').country;
const City 	= require('../models').city;

module.exports = {
	profileUpdate(req, res, next) {
		return Student
			.findOne({
				where:{userId:req.params.userId},
				// include: [
				// 		{model: Country}
				// ]
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
	eventStudentCreate(req, res){
		return Student
		.findOne({
			where:{userId:req.body.userId},
		})
		.then(
			student => {
				if(!student) return res.status(404).send({message: "Student Not Found![2]"});
				return EventStudent
					.create({
						businessIdea: req.body.businessIdea,
						businessIdeaDesc: req.body.businessIdeaDesc,    
						openToOtherIdeas: req.body.openToOtherIdeas,    
						videoLink: req.body.videoLink,  
						status:"Registered",  
						eventId	: req.params.eventId,
						studentId: student.id
					})
					.then(event => res.status(200).send(event))
					.catch(error => res.status(400).send(error));
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
	eventStudentIndex(req, res){
		return Student
		.findOne({
			where:{userId:req.params.userId},
		})
		.then(
			student => {
				if(!student) return res.status(404).send({message: "Student Not Found![2]"});
				EventStudent.findAll(
					{where: {studentId:student.id},
				})
				.then(eventStudent => res.status(200).send(eventStudent) )
				.catch( error => res.status(400).send(error) );
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
							gender: {$ilike: '%' + req.query.gender + '%'}
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
							country: {$ilike: '%' + req.query.country + '%'}
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
							city: {$ilike: '%' + req.query.city + '%'}
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
							{model:Country, attributes: { exclude: ['id'] }},
							{model:Event}
						],
						limit: limit,
						offset: offset,
					})
					
				.then(event => res.status(200).send(event) )
				.catch( error => res.status(400).send(error) );
				}
	})
	},
		// below api not really needed?
		profile(req, res) {
			
			// EventStudent.findOne({
			// 	where: { studentId: req.params.studentId },
			// 	include: [{model:Event}]					
			// })
			// .then(events => {
				return Student
					.findOne({
						where: {user_id:req.params.userId},
						include: [
								{model: Country, attributes: { exclude: ['id'] }},
								{model:Event, include:[{model:Country}]
							}
						]
					})
	 
					.then(
						student => {
							
							// student.dataValues.EventsEnrolled = events;
						
							if (!student) {
							return res.status(400).send({success: false, message: 'Student not Found'});
							}
						
							// const data = {
							// 	id: user.id,
							// 	username: user.username,
							// 	email: user.email
							// }
							// student.dataValues.country = 
							return res.status(200).send(student);
	
					})
					.catch(error => res.status(400).send(error));
				// } )
				// .catch( error => console.log(error) );
		},
};