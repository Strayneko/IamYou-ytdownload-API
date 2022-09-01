const express = require('express')
const { apiRoot, getVidInfo, getVideoById } = require('./controllers')

const routes = express.Router()

routes.get('/', apiRoot)

routes.post('/get', getVidInfo)
routes.get('/get_by_id/:videoId', getVideoById)

module.exports = routes
