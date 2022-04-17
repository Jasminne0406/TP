const express = require("express");
const path = require('path');
const logger = require('../middleWare/logger');
const route = require('../routes/api');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

// using for create member
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(route);
app.use(logger);
app.listen(3000);