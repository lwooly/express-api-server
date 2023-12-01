const express = require("express");

const app = express();

require('./middleware')(app);
require('./db');

module.exports = app;