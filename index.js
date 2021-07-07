const config = require('./utils/config')
const express = require('express')
const morgan = require('morgan')
const { updateLocation } = require('./mongo')
const middleware = require('./utils/middleware')
const app = express()

app.use(morgan('tiny'))

app.post('/log', (req, res) => {
    const uid = parseInt(req.query.uid)
    const locUpdate = [req.query.lat, req.query.lon, req.query.time]
    console.log(locUpdate)
    updateLocation(uid, locUpdate)
    res.status(200).end()
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.listen(config.PORT)
console.log(`Server running on port ${config.PORT}`)