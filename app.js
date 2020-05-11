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

module.exports = app;