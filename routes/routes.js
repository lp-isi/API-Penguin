'use strict'

let responder = require ('helpers/response.builder')

//Require angular app routes
let index = require('routes/index')

//Import API routes
let penguinRoutes = require ('routes/penguin.routes')

module.exports = function (app) {
	//Angular app
	app.use('/', index)

	//API Routes
	app.use('/penguins', penguinRoutes)

	app.use(responder.notFound)
	app.use(responder.error)
}