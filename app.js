const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')

const app = express()

// 日志
app.use(morgan('dev'))

app.use(express.json())

app.use(cors())

app.use('/api',router)

// 挂在统一错误中间件
app.use(errorHandler())

const PORT = process.env.PORT || 3000




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} `)
})