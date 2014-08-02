var express = require('express');
var router = express.Router();

var data;

router.get('/', function(req, res) {
  res.send(data);
});


router.post('/', function(req, res) {
  data = req.body;
  res.send('success');
});
module.exports = router;
