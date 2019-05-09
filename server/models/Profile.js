const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: String,
  savedImages: Array,
  firstName: {
    default: 'First name',
    type: String
  },
  lastName: {
    default: 'First name',
    type: String
  },
  lastName: {
    default: 'First name',
    type: String
  },
  profileAbout: String,
  profilePicture: String

  // followers: Array,
  // isPrivate: false
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)
