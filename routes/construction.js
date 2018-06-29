var express = require('express');
var router = express.Router();

/* GET construction page. */
router.get('/', function(req, res, next) {
    res.render('construction', { title: 'Construction' });
});

module.exports = router;