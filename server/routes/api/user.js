const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Profile = require('../../models/Profile')


router.post('/save', (req, res) =>{
  res.json({data: req.body})
  Profile.findOne({userId: req.body.id}).then( profile =>{
    if(!profile){
      const newUserProfile = new Profile({userId: req.body.id})
      newUserProfile.save()
    }
  })
  Profile.findOneAndUpdate({userId: req.body.id},
    // TODO: check if already in there
  {'$push': {savedImages: req.body.url}}).then(p => console.log(p))

})

module.exports = router
