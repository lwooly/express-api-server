const express = require("express");

module.exports = function(app) {
    app.use(express.static("public"))
    app.use(express.json())

    const cars = [{name: "Tesla"}, {name: "Ford"}]

    app.get('/api/v1/cars', (req, res) => {
        res.status(200).json(cars);
    })

    app.post('/api/v1/cars', (req, res) => {
        const newCar = req.body;
        cars.push(newCar);
        res.sendStatus(201)
    })
}

