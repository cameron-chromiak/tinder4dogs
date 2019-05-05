module.exports = function verifyToken(req, res, next){
  const bearerHeader = req.headers['authorization']
  if(typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(' ')
    const beaerToken = bearer[1]
    req.token = beaerToken
    next()
  }else{
    res.json({success:false})
  }
}
