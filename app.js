const express = require('express');
const path = require('path');
var morgan = require('morgan');
var cors = require('cors');
const helmet = require('helmet');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());


app.get('/api', (req, res) => {
    res.json({
        message: 'Response from the Express API',
    });
});

// 404 not found
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// error handler
app.use((error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? 'Contact your sys admin for more details' : error.stack
    })
})


module.exports = app;