const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: String,
  savedImages: Array,
  followers: Array,
  isPrivate: false
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
