const { mongoose } = require('./db/mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const routesAdmin = require('./routes/routesAdmin');
const routesOrganizer = require('./routes/routesOrganizer');
const routesIndex = require('./routes/routesIndex');
const routesLogin = require('./routes/routesLogin');
const routesRegister = require('./routes/routesRegister');
const routesParticipant = require('./routes/routesParticipant');


const app = express();
const db = mongoose.connection;

Registration = require('./models/registration');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(expressValidator());
app.use(cookieParser());
app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));
app.use(flash());


app.use('/', routesIndex)
app.use('/adminHome', routesAdmin);
app.use('/organizerHome', routesOrganizer);
app.use('/login', routesLogin);
app.use('/register', routesRegister);
app.use('/participantHome', routesParticipant);
app.use('/logout', routesIndex);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
