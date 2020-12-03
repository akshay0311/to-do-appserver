var todoModel = require("../models/schema.js");

module.exports.getTodos = (req,res)=> {
    todoModel.find({})
    .exec()
    .then(result=> {
        res.status(200).json(result)
    })
    .catch(err=>console.log(err))
}


module.exports.addTodo = (req,res)=> {
    console.log("yeaaaaaaaaaaaaaaaaaah");
    let {title,completed} = req.body;
    console.log(`the title is ${title}`);
    const todoItem = new todoModel({
        title,
        completed      
    })
    todoItem.save()
    .then(result=>res.status(201).json({"msg":"Saved Successfully"}))
    .catch(err=>console.log(err))
}


module.exports.delTodo = (req,res)=> {
    console.log("delete")
}