const User = require('../models/user')

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({})
    
    res.status(200).json(users)
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body)
    const user = await newUser.save()

    res.status(201).json(user)
  },

  getUser: async (req, res, next) => {
    const user = await User.findById(req.params.id)

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
  }
}