const Sequelize = require('sequelize');
const dbUrl = require('../config/config.default')
// database数据库名称   name 用户  password密码

const sequelize = new Sequelize(
    dbUrl.database,
    dbUrl.user,
    dbUrl.password,
    {
        host: dbUrl.host,  //数据库域名
        dialect:dbUrl.dialect,
        // 设置时区
        timezon: '+08:00',
        define: {
            timestamps: false //为模型添加 createdAt 和 updatedAt 两个时间戳字段（true or false）
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = sequelize


