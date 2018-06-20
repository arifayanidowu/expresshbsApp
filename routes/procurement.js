var express = require('express');
var router = express.Router();

/* GET procurement page. */
router.get('/', function(req, res, next) {
    res.render('procurement', { title: 'Procurement' });
});

module.exports = router;