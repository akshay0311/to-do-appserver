var express = require("express");
var router = express.Router();
var todos = require("../controllers/todos")

// fetching todos 
router.get("/",todos.getTodos);

// adding A todo
router.post("/",todos.addTodo);

// delete A todo
router.delete("/:id",todos.delTodo);


module.exports = router;