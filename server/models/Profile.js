const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: String,
  savedImages: Array,
  // followers: Array,
  // isPrivate: false
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
