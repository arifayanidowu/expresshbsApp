var express = require('express');
var router = express.Router();

/* GET food-beverages page. */
router.get('/', function(req, res, next) {
    res.render('food-beverages', { title: 'Food & Beverages' });
});

module.exports = router;