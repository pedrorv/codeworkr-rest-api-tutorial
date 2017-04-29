const express = require('express')
//const router = express.Router()
const router = require('express-promise-router')()

const usersController = require('../controllers/users')

router.route('/')
  .get(usersController.index)
  .post(usersController.newUser)


module.exports = router