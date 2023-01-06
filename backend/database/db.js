const mysql = require('mysql2/promise')
const settingsBackEnd = require('../config')

const connection = mysql.createPool({ 
    host: settingsBackEnd.hostDB, 
    user: settingsBackEnd.userDB, 
    password: settingsBackEnd.passwordDB, 
    database: settingsBackEnd.DB,
    waitForConnections: true
})

module.exports = connection