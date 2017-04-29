const User = require('../models/user')
const Car = require('../models/car')


module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({})
    
    res.status(200).json(users)
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.value.body)
    const user = await newUser.save()

    res.status(201).json(user)
  },

  getUser: async (req, res, next) => {
    const user = await User.findById(req.value.params.id)

    res.status(200).json(user)
  },

  replaceUser: async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json(user)
  },

  updateUser: async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)

    res.status(200).json(user)
  },

  deleteUser: async (req, res, next) => {
    const user = await User.findByIdAndRemove(req.params.id)

    res.status(200).json(user)
  },

  getUserCars: async (req, res, next) => {
    const user = await User.findById(req.params.id).populate({
      path: 'cars',
      ref: 'car',
      select: 'model make year -_id'
    })

    res.status(200).json(user.cars)
  },

  newUserCar: async (req, res, next) => {
    const newCar = new Car(req.body)
    newCar.seller = await User.findById(req.params.id)
    await newCar.save()
    const user = await User.findByIdAndUpdate(req.params.id, {
      $push: { cars: newCar }
    })
    
    res.status(200).json(newCar)
  }
}