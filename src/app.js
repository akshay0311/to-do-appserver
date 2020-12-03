var express = require('express');
var path = require('path');
var bp = require("body-parser");
var mongoose = require("mongoose")
var cors = require("cors");
require("./models/db.js");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'app_server/public')));
app.use(cors());
app.use("/",require("./routes/todos"));


app.listen(3001,()=>{
    console.log(`Running on port 3001`)
})
