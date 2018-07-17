var express = require('express');
var router = express.Router();

/* GET power page. */
router.get('/', function(req, res, next) {
    res.render('power', { title: 'Power Utility Infrastructure' });
});

module.exports = router;