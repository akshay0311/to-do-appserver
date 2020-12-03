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
    let {title,completed} = req.body;
    const todoItem = new todoModel({
        title,
        completed      
    })
    todoItem.save()
    .then(result=>res.status(201).json({"msg":"Saved Successfully"}))
    .catch(err=>console.log(err))
}


module.exports.delTodo = (req,res)=> {
    const id = req.params.id;
    todoModel.findById(id)
    .remove()
    .exec()
    .then(result=>{
        res.status(201).json("Delete Successfully")
        })
    .catch(err=>console.log(error))
}