/*------------------- ------------MONGOOSE CONNECTION FILE------------------------------------*/
var mongoose = require("mongoose");
require ("./schema");
// connection uri
var dbURI = "mongodb+srv://Akshay-Admin:LifHuPnfrFgdudYb@cluster0.80cvd.mongodb.net/Todos?retryWrites=true&w=majority";
mongoose.connect(dbURI,{useNewUrlParser: true});

/*-----------------------------------------MONGOOSE CONNECTION EVENT---------------------------------*/
// checking for successful connection
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
// checking for error
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});
// checking for disconnection
mongoose.connection.on('disconnected', function () {
console.log('Mongoose disconnected');
});

/*-------------------------------------CLOSING MONGOOSE CONNECTION--------------------------------*/
// callback for connection close
var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
   };
//for nodemon restart
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
//for app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
//for heroku termination
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

