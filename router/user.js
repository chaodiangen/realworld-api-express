const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')
// 用户相关路由
// Authentication
router.post('/users/login', userValidator.login, userCtrl.login)
// Registration
router.post('/users', userValidator.register, userCtrl.register)
// Get Current User
router.get('/user', auth, userCtrl.getUser)
// Update User
router.put('/user', auth, userCtrl.updateUser)
// Delete User
router.delete('/user', auth, userCtrl.deleteUser)
module.exports = router