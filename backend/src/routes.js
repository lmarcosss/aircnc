const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const { 
    SessionController, 
    SpotController, 
    DashboardController,
    BookingController,
} = require('./controllers')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.create)


routes.get('/spots', SpotController.getAll)
routes.post('/spots', upload.single('thumbnail'), SpotController.create)

routes.get('/dashboard', DashboardController.get)

routes.post('/spots/:spot_id/bookings', BookingController.create)


module.exports = routes