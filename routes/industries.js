var express = require('express');
var router = express.Router();

/* GET industries page. */
router.get('/', function(req, res, next) {
    res.render('industries', { title: 'Industries' });
});

module.exports = router;