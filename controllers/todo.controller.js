const { query } = require('express');
const Todo = require('../models/todo')
const mongoose = require('mongoose');

exports.getTodos = async function(req, res) {
    let query = {};

    if (req.params.id) {
        query.id = req.params.id;
    }

    try {
        const todos = await Todo.find(query);
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.addTodo = async function(req, res) {

    const todoData = req.body;
    
    try {
        const newTodo = new Todo(todoData);
        const todo = await newTodo.save();
        return res.status(201).json(todo);
    } catch (err) {
        res.status(500).send(err)
    };
};

exports.updateTodo = async function(req, res) {
    const todoData = req.body;
    const queryId = req.params.id;

    try {
        const todo = await Todo.findById(queryId)
        console.log(`found document`, todo instanceof mongoose.Document)

        console.log(todoData)
        todo.name = todoData.name
        todo.description = todoData.description
        await todo.save()
        return res.status(202).json(todo);
    }catch (err) {
        res.status(500).send(err)
    };
}


exports.deleteTodo = async function(req, res) {
    const queryId = req.params.id;
    try {
        const todo = await Todo.findById(queryId)
        await Todo.deleteOne(todo)
        return res.status(200).json(todo)

    } catch (err) {
        res.status(500).send(err)
    };
}