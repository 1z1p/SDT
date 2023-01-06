const connection = require('../database/db')

class News {
    async isNews(req, res) {
        try {
            const connect = await connection
            const [rows, fields] = await connect.execute('SELECT `id`, `name_news`, `news_image` FROM `news` WHERE 1')
            return res.status(200).json({ message: rows })
        } catch (error) {
            return res.status(400).json({ message: error.message })
        }
    }
    async isNewsFull(req, res) {
        try {
            const { id } = req.body
            const connect = await connection
            const [rows, fields] = await connect.execute('SELECT `name_news`, `discript_news`, `news_image` FROM `news` WHERE `id` = ?', [id])
            return res.status(200).json({ message: rows })
        } catch (error) {
            return res.status(400).json({ message: "Такой новости нет" })
        }
    }
}

module.exports = new News()