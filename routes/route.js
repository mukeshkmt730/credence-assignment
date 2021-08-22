const express = require('express');

const path = require('path');


const mongoose = require('mongoose');
const collection = require('../database/schema');

const route = express.Router();



route.get('/getall', async (req, res) => {

    try {
        const data = await collection.find();
        res.json(data)
    } catch (e) {
        res.json({ message: e.message })
    }
})



route.post('/create', async (req, res) => {
    const user = req.body;
    const newdoc = new collection(user);
    try {
        await newdoc.save();
        res.sendFile(path.join(__dirname + '/../frontend/create.html'))
    } catch (e) {
        res.json({ message: e.message })

    }
})


route.get('/getone/:name', async (req, res) => {

    const name = req.params.name

    try {
        const data = await collection.findOne({ name: name });
        res.json(data)
    } catch (e) {
        res.json({ message: e.message })
    }
})



route.delete('/deleteone/:name', async (req, res) => {
    const name = req.params.name

    try {
        const data = await collection.deleteOne({ name: name });
        res.json(data)
    } catch (e) {
        res.json({ message: e.message })
    }
})




route.put('/update/:name', async (req, res) => {
    const name = req.params.name;
    const user = req.body;
    const newuser = new collection(user)
    try {
        const updated = await collection.findOneAndUpdate({ name: name }, user)

        res.sendFile(path.join(__dirname + '/../frontend/update.html'))
    } catch (e) {
        res.json({ message: e.message })
    }
})


module.exports = route;