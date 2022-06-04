const Article = require('../model/Article')
const User = require('../model/user')
exports.getList = async (req, res, next) => {
    try {
        const data = await Article.findAll({
            include: {
                model: User, // 关联查询
                as: 'author' // 别名
            }
        })
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
}
exports.getFeed = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.getArticle = async (req, res, next) => {
    try {
        const id = req.params.articleId
        const data = await Article.findOne({
            include: {
                model: User, // 关联查询
                as: 'author' // 别名
            },
            where: {
                id: id
            }
        })
        console.log(JSON.stringify(data))
        if (!data) {
            res.status(201).json({ message: "暂无文章" })
        }
        const newData = JSON.parse(JSON.stringify(data))
        delete newData.author.password
        res.status(201).json(data)
    } catch (error) {
        next(error)
    }
}
// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        await Article.create(req.body)
        const data = await Article.findOne({
            include: [{ model: User }]
        });
        const newData = JSON.parse(JSON.stringify(data))
        delete newData.author.password
        res.status(201).json(newData)
    } catch (error) {
        next(error)
    }
}
exports.updateArticle = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.deleteArticle = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.deleteArticle = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.addComments = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.getComments = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.deleteComments = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.setFavorite = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}
exports.setUnFavorite = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/')
    } catch (error) {
        next(error)
    }
}