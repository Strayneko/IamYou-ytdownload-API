const express = require('express')
const cors = require('cors')
const routes = require('./api/routes')
const { apiRoot } = require('./api/controllers')

const app = express()

// cors middleware  (enabling cors)
app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.listen('5050', () => console.log(`Server running at 127.0.0.1:5050`))

app.get('/', apiRoot)
// api routes middleware
app.use('/api', routes)
