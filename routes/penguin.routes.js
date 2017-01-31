let express = require('express')
let router = express.Router()

let penguinController = require('controllers/penguin.controllers.js')

router.post('/', penguinController.createPenguin)
router.get('/', penguinController.get)
module.exports = router