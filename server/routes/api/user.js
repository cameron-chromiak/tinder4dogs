const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Profile = require('../../models/Profile')


router.post('/save', (req, res) =>{
  //create user if not already in db
  // FIXME: This does not work on first save!
  // res.json({data: req.body})
  Profile.findOne({userId: req.body.id}).then( profile =>{
    if(!profile){
      const newUserProfile = new Profile({userId: req.body.id})
      newUserProfile.save()
    }
  })
  // TODO: if already saved dont save
  Profile.findOneAndUpdate({userId: req.body.id},
    // TODO: check if already in there
  {'$push': {savedImages: req.body.url}}).then(p => console.log(p))

  })


//should be GET
router.post('/profile', (req, res) =>{
  Profile.findOne({userId: req.body.id}).then( profile =>{
    if(!profile){
      const newUserProfile = new Profile({userId: req.body.id})
      newUserProfile.save()
    }else{
      Profile.findOne({userId: req.body.id}).then(profile =>{
        res.json({profile})
      })
    }
  })
})

module.exports = router
