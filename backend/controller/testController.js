const connection = require('../database/db')

class Test {
    async isTestReadyName(req, res) {
        try {
            const connect = await connection
            const [rows, fields] = await connect.execute('SELECT `id`, `name_test` FROM `test` WHERE 1')
            return res.status(200).json({ data: rows })
        } catch (error) {
            return res.status(400).json({ data: error.message })
        }
    }

    async isTestReady(req, res) {
        try {
            const {id} = req.body
            const connect = await connection
            const [rows, fields] = await connect.execute('SELECT `id`, `name_test`, `quest`, `answer` FROM `test` WHERE `id` = ?',[id])
            return res.status(200).json({ data: rows })
        } catch (error) {
            return res.status(400).json({ data: error.message })
        }
    }

    async isTestResult(req, res) {
        const {id, name_test, name, result} = req.body
        
        const connect = await connection
        const [rows, fields] = await connect.execute('SELECT `verify_answer` FROM `test` WHERE `id` = ?', [id])
        const verify_answer = JSON.parse(rows[0]['verify_answer'])
        const data = new Date()
        const results = []
        let number = 0

        for (let index = 0; index < verify_answer.length; index++) {
            if(result[index] === verify_answer[index]) {
                number++
                results.push(1)
            } else
                results.push(0)
        }


        if(results.length * 0.5 <= number) {
            const [rows, fields] = await connect.execute('INSERT INTO `result`(`name_test`, `name`, `result`, `status`, `data`) VALUES (?,?,?,?,?)', [name_test, name, results, "Прошел тест", data])

            return res.status(200).json({ 
                data: { 
                    result: results, 
                    status: "Прошел тест"
                } 
            })
        }
            
        else {
            const [rows, fields] = await connect.execute('INSERT INTO `result`(`name_test`, `name`, `result`, `status`, `data`) VALUES (?,?,?,?,?)', [name_test, name, results, "Не прошел тест", data])

            return res.status(200).json({ 
                data: { 
                    result: results, 
                    status: "Не прошел тест"
                } 
            })
        }
    }
}

module.exports = new Test()