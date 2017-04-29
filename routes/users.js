const express = require('express')
//const router = express.Router()
const router = require('express-promise-router')()

const usersController = require('../controllers/users')
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

router.route('/')
  .get(usersController.index)
  .post(validateBody(schemas.userSchema), usersController.newUser)

router.route('/:id')
  .get(validateParam(schemas.idSchema, 'id'), usersController.getUser)
  .put(usersController.replaceUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser)

router.route('/:id/cars')
  .get(usersController.getUserCars)
  .post(usersController.newUserCar)

module.exports = router