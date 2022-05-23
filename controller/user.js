// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/user')
    } catch (error) {
        next(error)
    }
}
// 用户注册
exports.register = async (req, res, next) => {
    try {
        // 处理请求 
        // 发送响应
        res.end('/register')
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
        res.end('/user')
    } catch (error) {
        next(error)
    }
}