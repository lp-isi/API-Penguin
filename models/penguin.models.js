let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//Define penguin Schema
 let PenguinSchema = new Schema({
 	name: {type: String},
 	age: {type: Number},
 	sex: {type: String, enum: ['F','M']},
 	deletedAt: {type: Date, default:null }
 },
 {
 	timestamps: {
 		createdAt: 'created_at',
 		uploadedAt: 'uploaded_at'
 	}
 })

 module.exports = mongoose.model('Penguin', PenguinSchema)