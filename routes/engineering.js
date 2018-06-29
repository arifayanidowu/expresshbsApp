var express = require('express');
var router = express.Router();

/* GET engineering page. */
router.get('/', function(req, res, next) {
    res.render('engineering', { title: 'Engineering' });
});

module.exports = router;