const express = require('express');
const path = require('path');

require('./database/conn.js');

const route=require('./routes/route.js');



const app = express();
const port = process.env.PORT || (3000);
app.use(express.json())
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/index.html'))
})
app.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/create.html'))
})
app.get('/read', async (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/read.html'))
})
app.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/update.html'))
})
app.get('/delete', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/delete.html'))
})


app.use('',route)





app.listen(port, () => {
    console.log(`app running on port ${port}`);
})