var express = require('express');
var router = express.Router();
var keyValues = []

router.get('/', function(req, res) {
  res.render('index', { title: 'Database Server' });
});

router.get('/set', function(req, res) {
  keyValues.push(req.query);
  res.send(keyValues);
});

router.get('/get', function(req, res) {
  var key = Object.keys(req.query)[0];
  for (i=0; i<keyValues.length; i++) {
    if (Object.keys(keyValues[i])[0] === key) {
      res.send(keyValues[i][key]);}
      else {res.send("No key matches your search");
    };
  };
});

module.exports = router;
