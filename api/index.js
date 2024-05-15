const express = require('express');
const app = express();
const cors = require('cors');
const Entry = require('./models/Entry.js');
const multer = require('multer')
const pool = require('./db.js')
const uploadMiddleware = multer({dest: 'uploads/'})
const fs = require('fs')

app.use(cors())
app.use(express.json())


app.get('/test', (req, res) => {
    console.log('ok')
})


app.post('/', async (req, res) => {

    try{
        await pool.query('CREATE TABLE ')
    }

})

app.post('/post', uploadMiddleware.single('file'), (req, res) => {
    const {originalname, path} = req.file;
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    fs.renameSync(path, path+'.'+ext)


    res.json(ext)
})

app.get('/items', (req, res) => {
    
})


app.listen(4000)