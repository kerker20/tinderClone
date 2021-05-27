const express = require("express");
const mongoose = require("mongoose");
const Cors = require("Cors");


// import express from 'express';
// import mongoose from 'mongoose';
// import Cors from 'Cors';
const Cards = require("./dbCards.js")
// import Cards from './dbCards.js';

//App Config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:Keah1438@cluster0.cpb2c.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middleware

app.use(express.json());
app.use(Cors());

//DB config

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
});

app.get('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
});



//Listeners

app.listen(port, () => console.log(`Listening on localhost: ${port}`));