const express = require('express');
const router = express.Router()

const {
    getTodos, 
    addTodo, 
    updateTodo, 
    deleteTodo
} = require("../controllers/todo.controller")

router
 .get("/:id?", getTodos)
 .post("/", addTodo)
 .post("/:id", updateTodo)
 .post("/delete/:id", deleteTodo)

 module.exports = router;