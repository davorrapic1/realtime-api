const express = require('express');
const path = require('path');
var morgan = require('morgan');
var cors = require('cors');
const helmet = require('helmet');
const middlewares = require('./middlewares/middleware')

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());


app.get('/api', (req, res) => {
    res.json({
        message: 'Response from the Express Rest API',
    });
});

app.use(middlewares.notFound);
app.use(middlewares.handleErrors);


module.exports = app;