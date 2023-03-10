const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const cors = require('cors');

const usersRouter = require('./routes/userRoutes');
const storeRouter = require('./routes/storeRoutes');
const orgRouter = require('./routes/orgRoutes');
const libraryRouter = require('./routes/libraryRoutes');
const layoutRouter = require('./routes/layoutRoutes');
const displayRouter = require('./routes/displayRoutes');
const deviceRouter = require('./routes/deviceRoutes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use('/api/user', usersRouter);
app.use('/api/store', storeRouter);
app.use('/api/org', orgRouter);
app.use('/api/library', libraryRouter);
app.use('/api/layout', layoutRouter);
app.use('/api/display', displayRouter);
app.use('/api/device', deviceRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});

module.exports = app;