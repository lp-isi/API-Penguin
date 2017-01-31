//import helpers
let responder = require('helpers/response.builder.js')
//import services
let penguinServices = require('services/penguin.services.js')

exports.createPenguin = (req,res,next) => {
	//Check required parameters 
	if (!req.body.name || !req.body.age || !req.body.sex){
		return responder.respondBadRequest(res,'Bad request, missing parameters')
	}
	else {
	penguinServices.findByName(req.body.name)
		.then((savedPenguin) =>{
			console.log('entro al primer find')
			if ((savedPenguin) && (!savedPenguin===undefined)) {
				responder.respondBadRequest(res, 'The penguin already exists')
			}
			else {
				//build penguin object
				console.log('el penguin no existe')
				let penguin = {
					name:req.body.name,
					age:req.body.age,
					sex:req.body.sex
				}
				penguinServices.createPenguin(penguin)
					.then(() => {
						penguinServices.findByName(penguin.name)
							.then((createdPenguin) => {
								if(createdPenguin !==undefined){
									return responder.respondData(res,createdPenguin)
								}
								else {
									return responder.respondData(res, {})
								}
							})
							.catch((e) => {
								return responder.respondServerError(res, 'Internal server error',500)
							})
						})
					.catch((e) => {
						responder.respondServerError(res, 'Internal server error',500)
					})	
			}
		})
		.catch((e) => {
			responder.respondServerError(res, 'Internal server error',500)
		})
	}

}

exports.get = (req,res,next) => {
	res.send('estoy en penguin controlleer')
}