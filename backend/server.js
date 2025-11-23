const express = require('express')
const app = express()
const xmlparser = require('express-xml-bodyparser');
const { db } = require('./models/indes')


// For POST requests
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(xmlparser());



// Routes
// kdjksjdkjksjdoidoiwoe
app.use('/', require('./routes/routes'))

db.sync()
    .then(() => {
        console.log('Database connected successfully');
        app.listen(5000, () => console.log("listening on port 5000", 'click on http://localhost:5000'))

    })
    .catch(err => {
        console.error(err)
    })
