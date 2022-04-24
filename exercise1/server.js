const express = require("express");
const path = require('path');
const route = require('./routes/api');
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// using for create member
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(route);
// connect to db
mongoose.connect('mongodb+srv://prakmlis:dav0406$$@cluster0.wfmfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected database successfully");
});
app.listen("3000",() => {
    console.log("Server run on port 3000");
});