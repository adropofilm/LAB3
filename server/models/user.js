const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    password: String,
    email: String
})

module.exports = mongoose.model('user', userSchema, 'users')
