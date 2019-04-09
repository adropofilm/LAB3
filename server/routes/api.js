// Necessary Imports:
const express = require('express')
const User = require('../models/user')
const mongoose = require('mongoose')

// Constants:
const OK = 200
const UNAUTHORIZED = 401
const router = express.Router()
const database = 'mongodb+srv://user:user@cluster0-auj86.mongodb.net/test?retryWrites=true'

mongoose.connect(database, error => {
  if (error) {
    console.error(`Error: ${error}`)
  } else {
    console.log('SUCCESS: Connected to MongoDB Atlas')
  }
})

router.get('/', (request, response) =>{
  response.send('From API Route')
})

// Register new user
router.post('/register', (request, response) => {
  let userInfo = request.body
  let user = new User(userInfo)
  user.save((error, savedUser) => {
    if (error) {
      console.log(error)
    } else {
      response.status(OK).send(savedUser)
    }
  })
})

// Login using existing login information
router.post('/login', (request, response) => {
  // Extract user info from input
  let userInfo = request.body

  // DB Query and login if possible, otherwise return error
  User.findOne({email: userInfo.email}, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) { // Check if user exists
        response.status(UNAUTHORIZED).send('Email does not exist')
      } else
      if (userInfo.password !== user.password) { // Check if passwords match
        response.status(UNAUTHORIZED).send('Password is Invalid')
      } else { // SUCCESS
        response.status(OK).send(user)
      }
    }
  })
})

module.exports = router
