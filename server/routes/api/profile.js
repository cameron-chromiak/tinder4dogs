const express = require('express');
const router = express.Router();

const Profile = require('../../models/Profile')


router.post('/', (req, res) =>{
  console.log(req)
  res.json({profile:true})
})

module.exports = router
