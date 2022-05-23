const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')

// 用户相关路由
// Authentication
router.post('/users/login', userCtrl.login)
// Registration
router.post('/users', userCtrl.register)
// Get Current User
router.get('/user', userCtrl.getUser)
// Update User
router.put('/user', userCtrl.updateUser)

module.exports = router