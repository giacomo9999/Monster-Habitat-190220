var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // Landing page now redirects to Monsters index
  // res.render('index', { title: 'Home Index' });
  res.redirect('/monsters');
});

module.exports = router;
