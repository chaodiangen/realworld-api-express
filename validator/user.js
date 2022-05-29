const { body } = require('express-validator');
const validate = require('../middleware/validation')
const User = require('../model/user')
exports.register = validate([
    body('username')
        .notEmpty().withMessage('用户名不能为空')
        .custom(async value => {
            // 查询数据库 判断是不是已经存在
            const username = await User.findOne({
                where: {
                    username: value
                }
            })
            if (username) {
                return Promise.reject('用户名已经存在')
            }
        }).bail(),
    body('password')
        .notEmpty().withMessage('密码不能为空').bail()
        .isLength({ min: 5 }).withMessage('密码长度不能少于5位'),
    body('email')
        .notEmpty().withMessage('邮箱不能为空')
        .bail()
        .isEmail().withMessage('邮箱格式不正确')
        .bail() // 前面验证失败不会往后走
        .custom(async value => {
            // 查询数据库 判断是不是已经存在
            const email = await User.findOne({
                where: {
                    email: value
                }
            })
            if (email) {
                return Promise.reject('邮箱已经存在')
            }
        }),
])