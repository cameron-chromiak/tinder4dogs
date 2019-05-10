const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Profile = require('../../models/Profile')
// @ ROUTE
// @ ACESS
// @DESCRIPTION

// @ /api/user/create
// @ on login
// @automatically creates user in db on first log in
router.post('/create', (req, res) =>{
  console.log('create');
  Profile.findOne({userId: req.body.id}).then( profile =>{
    if(!profile){
      const newUserProfile = new Profile({userId: req.body.id})
      newUserProfile.save()
    }else{
      return res.json({profile: true})
    }
    })
  })

// @ /browse
// @ public
// @save images to current user
router.post('/save', (req, res) =>{
  // TODO: if already saved dont save
  Profile.findOneAndUpdate({userId: req.body.id},
    // TODO: check if already in there
  {'$push': {savedImages: req.body.url}}).then(profile => profile.save())

  })


//should be GET
// @ api/user/profile
// @ public
// @show user profile images
router.post('/profile', (req, res) =>{
      Profile.findOne({userId: req.body.id}).then(profile =>{
        res.json({profile})
      })
  })

// @ api/user/profile/updateprofile
// @ logged in user
// @edit users profile header
router.post('/updateProfile', (req, res) =>{
  // console.log(req.body.data)
  Profile.findOneAndUpdate({userId: req.body.id},
  {'$set': {firstName: req.body.data.userData.firstName,
            lastName:  req.body.data.userData.lastName ,
            aboutMeText:  req.body.data.userData.aboutMeText }}).then(res => console.log(res))
})

// @ api/user/profile/deleteImage
// @ logged in user
// @delete image with from array with that user's id
router.post('/deleteImage', (req, res) =>{
  Profile.update({userId: req.body.id},
  {'$pull': {'savedImages' : req.body.src}}).then(res => console.log(res))
})

module.exports = router
