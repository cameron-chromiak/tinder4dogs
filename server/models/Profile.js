const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: String,
  savedImages: Array,
  firstName: {
    default: '',
    type: String
  },
  lastName: {
    default: '',
    type: String
  },
  aboutMeText: {
    default: '',
    type:String},

  profilePicture: String

  // followers: Array,
  // isPrivate: false
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
