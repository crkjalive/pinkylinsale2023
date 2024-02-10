const express = require('express')
const usersRouter = express.Router()
const usersController = require('../controller/usersController.js')

usersRouter.get('/', usersController.getUsersLogin)
usersRouter.post('/usersLogin', usersController.usersLogin)

module.exports = usersRouter