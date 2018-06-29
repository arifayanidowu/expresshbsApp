var express = require('express');
var router = express.Router();

/* GET installation page. */
router.get('/', function(req, res, next) {
    res.render('installation', { title: 'Installation' });
});

module.exports = router;