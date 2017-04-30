const router = require('express-promise-router')()

const carsController = require('../controllers/cars')
const {
  validateParam,
  validateBody,
  schemas
} = require('../helpers/routeHelpers')

router.route('/')
  .get(carsController.index)

module.exports = router