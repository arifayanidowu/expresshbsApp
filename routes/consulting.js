var express = require('express');
var router = express.Router();

/* GET consulting page. */
router.get('/', function(req, res, next) {
    res.render('consulting', { title: 'Strategic Consulting' });
});

module.exports = router;