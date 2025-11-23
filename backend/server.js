const express = require('express')
const app = express()
const xmlparser = require('express-xml-bodyparser');
const multer = require('multer');
const { db } = require('./models/indes')


// For POST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(xmlparser());



// Routes
app.use('/api', require('./routes/routes'))

db.sync()
    .then(() => {
        app.listen(5000, () => console.log("listening on port 5000", 'click on http://localhost:5000'))

    })
    .catch(err => {
        console.error(err)
    })
