const router = require('express-promise-router')()

const carsController = require('../controllers/cars')
const {
  validateParam,
  validateBody,
  schemas
} = require('../helpers/routeHelpers')

router.route('/')
  .get(carsController.index)
  .post(validateBody(schemas.newCarSchema), carsController.newCar)

module.exports = router