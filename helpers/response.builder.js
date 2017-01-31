

exports.respondData = (res, data) => {
	let response = {}
	response.data = data
	res.status(200)
	respond(res,response)
	console.log(response.data)
}

exports.respondBadRequest = (res,message) => {
	let response = {}
	response.message = message;
	res.status(400)
	respond(res,response)
}

exports.respondNotFound = (res) => {
	let response = {}
	response.message = 'Not Found';
	res.status(404)
	respond(res,response)
}

exports.respondServerError = (res, message, code=500) => {
	let response = {}
	response.message = message
	response.code = code
	res.status(500)
	respond(res,response)
}

exports.respondUnauthorized = (res) => {
	let response = {}
	response.message = 'Unauthorized'
	res.status(401);
	respond(res,response)
}

exports.notFound = (req, res, next) => {
  let err = new Error()
  err.status = 404
  next(err)
}

exports.error = (err, req, res, next) => {
  res.status(err.status || 500).send({message: err.message} || {})
}
