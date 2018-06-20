var express = require('express');
var router = express.Router();

/* GET submitrfqs page. */
router.get('/', function(req, res, next) {
    res.render('submitrfqs', { title: 'Submit RFQs' });
});

module.exports = router;