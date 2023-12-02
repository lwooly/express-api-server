const express = require('express');
const router = express.Router()

const {
    getTodos, addTodo, updateTodo
} = require("../controllers/todo.controller")

router
 .get("/:id?", getTodos)
 .post("/", addTodo)
 .post("/:id", updateTodo)

 module.exports = router;