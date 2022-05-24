const mysql = require('mysql');
const dbUrl = require('../config/config.default')
const connection = mysql.createConnection(dbUrl);

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection