const { body, param, validationResult } = require('express-validator');
const validate = require('../middleware/validation')

exports.createArticle = validate([
    body('title').notEmpty().withMessage('文章标题不能为空'),
    body('description').notEmpty().withMessage('文章摘要不能为空'),
    body('body').notEmpty().withMessage('文章内容不能为空')
])
exports.getArticle = validate([
    param('articleId').notEmpty().custom(async (value, { req }) => {
        if (!Number(value)) {
            return Promise.reject('文章id类型错误')
        }
    })
])
exports.updateArticle = [
    validate([
        validate.isValidObjectId(['param'], 'articleId')
    ]),
    (req, res, next) => {
        const articleId = req.params.articleId
        // 查找文章作者是不是当前用户
        // if (0) {
        //     return res.status(404).end()
        // }
        next()
    },
    async (req, res, next) => {
        // if (req.user.id !== article.author) {
        //     return res.status(403).end()
        // }
    }
]