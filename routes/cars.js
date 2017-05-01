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
      validateBody(schemas.putCarSchema)
    ],
    carsController.replaceCar
  )
  .put(
    [
      validateParam(schemas.idSchema, 'id'),
      validateBody(schemas.patchCarSchema)
    ],
    carsController.updateCar
  )
  .delete(validateParam(schemas.idSchema, 'id'), carsController.deleteCar)

module.exports = router