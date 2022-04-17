const express = require("express");
const path = require('path');
const logger = require('./middleWare/logger.js');
const route = require('./routes/api');
const app = express();
const bodyParser = require("body-parser");
// using for create member
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(route);
app.use(logger);
app.listen(3000);