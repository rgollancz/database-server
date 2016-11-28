var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DB Server' });
});

// router.post('/set/')


router.get('/get')

module.exports = router;
