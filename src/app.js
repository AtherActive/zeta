const express = require('express');
const session = require('express-session');
const nunjucks = require('nunjucks');
const app = express();

// Routers
const auth = require('./routers/auth.router');
const base = require('./routers/base.router')

const sessionManager = require('./modules/session');
const User = require('./classes/user.class');
const log = require('./modules/logger');
require('dotenv').config()

nunjucks.configure('./src/public', {
    autoescape: false,
    express: app
});

// Middleware
app.use(express.static('./src/public'));
app.use(session(sessionManager.sess));

app.use('/auth', auth);
app.use('/',base);

// Initialize webserver
app.listen(3500, () => log('WEBSERVER',`Listening on port ${3500}!`));