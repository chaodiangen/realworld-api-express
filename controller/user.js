
const User = require('../model/user')
const md5 = require('../util/md5')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 1、获取请求体
// 2、数据验证
// 2.1、基本数据验证
// 2.2、业务数据验证
// 3、验证通过，将数据保存到数据库 

// 用户登录
exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email,
                password: md5(req.body.password)
            }
        })
        const token = await jwt.sign({ userId: user.id }, jwtSecret, {
            expiresIn: 60 * 60 * 24
        })
        res.status(200).json({
            username: user.username,
            status: user.status,
            email: user.email,
            bio: user.bio,
            token: token,
            create_time: user.create_time,
            update_time: user.update_time
        })
    } catch (error) {
        next(error)
    }
}


/**
 * 用户注册
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.register = async (req, res, next) => {
    try {
        const user = await User.create({ ...req.body })
        res.status(200).json({
            username: user.username,
            status: user.status,
            email: user.email,
            bio: user.bio,
            create_time: user.create_time,
            update_time: user.update_time
        })
    } catch (error) {
        next(error)
    }
}
/**
 * 获取当前登录信息
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
// Get Current User
exports.getUser = async (req, res, next) => {
    try {
        // 数据认证
        res.status(200).json({
            user: req.user
        })
    } catch (error) {
        next(error)
    }
}
// Update User
exports.updateUser = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        const params = {
            ...req.body
        }
        const aa = await User.update(params, {
            where: { id: params.id }
        })
        res.status(2001).json(aa)
    } catch (error) {
        next(error)
    }
}
// Delete User
exports.deleteUser = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        const params = {
            ...req.body
        }
        const aa = await User.update(params, {
            where: { id: params.id }
        })
        res.status(2001).json(aa)
    } catch (error) {
        next(error)
    }
}