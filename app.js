var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let hbs = require('hbs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let aboutRouter = require('./routes/about');
let procurementRouter = require('./routes/procurement');
let engineeringRouter = require('./routes/engineering');
let consultingRouter = require('./routes/consulting');
let installationRouter = require('./routes/installation');
let constructionRouter = require('./routes/construction');
let careersRouter = require('./routes/careers');
let contactRouter = require('./routes/contact');
let submitrfqsRouter = require('./routes/submitrfqs');
let oilGasRouter = require('./routes/oil-gas');
let foodBeveragesRouter = require('./routes/food-beverages');
let powerRouter = require('./routes/power');

var app = express();

hbs.registerPartials(__dirname + '/views/partials/');

hbs.registerHelper('curdate', () => new Date().getFullYear());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Pages middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/procurement', procurementRouter);
app.use('/engineering', engineeringRouter);
app.use('/consulting', consultingRouter);
app.use('/construction', constructionRouter);
app.use('/installation', installationRouter);
app.use('/careers', careersRouter);
app.use('/contact', contactRouter);
app.use('/submitrfqs', submitrfqsRouter);
app.use('/oil-gas', oilGasRouter);
app.use('/food-beverages', foodBeveragesRouter);
app.use('/power', powerRouter);
// ---->

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

console.log(`Server Started`);

module.exports = app;