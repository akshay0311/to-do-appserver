const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    completed : {type:Boolean,default:false},
    title : [String],
    date : {type: Date}
})

module.exports =  mongoose.model('Todos', todoSchema);