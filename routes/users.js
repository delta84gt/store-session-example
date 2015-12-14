var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session == null || !req.session.key) {
    res.redirect('/');
    //res.json({"error" : true, "message" : "Please login first."});
  } else {
    res.send('respond with a resource');
  }
});

module.exports = router;
