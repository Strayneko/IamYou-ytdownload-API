const express = require('express')
const { apiRoot, getVidInfo } = require('./controllers')

const routes = express.Router()

routes.get('/', apiRoot)

routes.get('/video_info/:url', getVidInfo)

module.exports = routes
