const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
// 用户相关路由
// Authentication
router.post('/users/login', userCtrl.login)
// Registration
router.post('/users', userValidator.register, userCtrl.register)
// Get Current User
router.get('/user', userCtrl.getUser)
// Update User
router.put('/user', userCtrl.updateUser)

module.exports = router