const router = require('express-promise-router')()

const carsController = require('../controllers/cars')
const {
  validateParam,
  validateBody,
  schemas
} = require('../helpers/routeHelpers')

router.route('/')
  .get(carsController.index)
  .post(validateBody(schemas.carSchema), carsController.newCar)

router.route('/:id')
  .get(validateParam(schemas.idSchema, 'id'), carsController.getCar)
  .put(
    [
      validateParam(schemas.idSchema, 'id'),
      validateBody(schemas.carSchema)
    ],
    carsController.replaceCar
  )

module.exports = router