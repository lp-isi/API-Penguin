let Penguin = require('models/penguin.models.js')

//Return all the penguins
exports.findAll = () => {
	return Penguin.find({},{__v:false})
}

//Return a penguin with specific id
exports.findByName = (name) => {
	return Penguin.findOne({name: name},{__v:false})
}

//Insert a new a penguin
exports.createPenguin = (penguin) => {
	let mongoPenguin = new Penguin(penguin)
	return mongoPenguin.save()
}

//Update a penguin already exists
exports.updatePenguin = (id) => {
	Penguin.findOneAndUpdate({_id:id},{$set:penguin},{new:true})
}

exports.deletePenguin = (id) => {
	Penguin.findOne({_id:id},{__v:false})
}