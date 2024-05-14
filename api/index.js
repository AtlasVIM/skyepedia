const express = require('express');
const app = express();
const cors = require('cors');
const Entry = require('./models/Entry.js');
const { default: mongoose } = require('mongoose');

app.use(cors())
app.use(express.json())

mongoose.connect();

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.listen(4000)




app.get('/items', (req, res) => {

})

