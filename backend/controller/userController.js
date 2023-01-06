const jwt = require('jsonwebtoken')
const hash = require('password-hash')
const connection = require('../database/db')

const { secret } = require("../config.json")

class User {
    async login(req, res){
        try {
            const { mail, password } = req.body
            
            const connect = await connection;
            const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `mail` = ?', [mail]);
            const expiredUser = rows[0]
            const name = expiredUser.name

            if (!expiredUser)
                throw new Error("Пользователя не существует")

            if (expiredUser.password !== password)
                throw new Error("Неверный пароль")

            const token = jwt.sign({ number: expiredUser.number }, secret, { expiresIn: "24h" })
            return res.status(200).json({ token, name })
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    async register(req, res){
        try {
            const { name, number, mail, password } = req.body  

            const connect = await connection;
            const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `mail` = ?', [mail]);
            const expiredUser = rows[0]
            if (expiredUser)
                throw new Error("Пользователь уже существует")

            await connection.execute("INSERT INTO `users` (`name`, `number`, `mail`, `password`) VALUES (?, ?, ?, ?)", [name, number, mail, password]);

            const token = jwt.sign({ number }, secret, { expiresIn: "24h" })
            return res.status(200).json({ token, name })
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }

    async infoByToken(req, res) {
        try {
            const token = req.headers.authorization
            const connect = await connection;
            const suspect = jwt.verify(token, secret)

            if (suspect === false)
                throw new Error("Неверный токен")

            const [rows, fields] = await connect.execute('SELECT * FROM `users` WHERE `number` = ?', [suspect.number]);
            const user = rows[0]
            if (user === false)
                throw new Error("Пользователя не существует")

            return res.status(200).json({ user })
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
}

module.exports = new User()
