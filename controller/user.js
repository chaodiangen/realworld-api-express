
const User = require('../model/user')
// 1、获取请求体
// 2、数据验证
// 2.1、基本数据验证
// 2.2、业务数据验证
// 3、验证通过，将数据保存到数据库 

// 用户登录
exports.login = async (req, res, next) => {
    try {
        User.findOne({
            where: {
                id: req.body.id
            }
        }).then(res => {
            console.log(res)
        })

        // 处理请求 
        // 发送响应
        res.end('/user')
        return
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
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}
// Get Current User
exports.getUser = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/user')
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