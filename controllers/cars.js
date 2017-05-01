const Car = require('../models/car')
const User = require('../models/user')

module.exports = {
  index: async (req, res, next) => {
    const cars = await Car.find({})

    res.status(200).json(cars)
  },

  newCar: async (req, res, next) => {
    const seller = await User.findById(req.value.body.seller)

    const newCar = req.value.body
    delete newCar.seller

    const car = new Car(newCar)
    car.seller = seller
    await car.save()

    seller.cars.push(car)
    await seller.save()

    res.status(200).json(car)
  }
}