const express = require('express')
const billsRoutes = express.Router()
const billsController = require('../controller/billsController')

billsRoutes.get('/', billsController.getBills)
billsRoutes.get('/add', billsController.getBillsAdd)
billsRoutes.get('/update/:id', billsController.getBillsUpdate)
billsRoutes.get('/delete/:id', billsController.getBillsDelete)
billsRoutes.get('/date', billsController.getBillsDate)

billsRoutes.post('/add', billsController.billsAdd)
billsRoutes.post('/update/:id', billsController.billsUpdate)
billsRoutes.post('/delete/:id', billsController.billsDelete)

module.exports = billsRoutes