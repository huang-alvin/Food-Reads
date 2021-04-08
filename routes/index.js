var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  if (res.locals.authenticated){
    res.redirect('/home');
  } else{

    res.render('index', { title: 'a/A Express Skeleton Home' });
  }
});

module.exports = router;
