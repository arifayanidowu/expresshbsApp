var express = require('express');
var router = express.Router();

/* GET oil-gas page. */
router.get('/', function(req, res, next) {
    res.render('oil-gas', { title: 'Oil & Gas' });
});

module.exports = router;