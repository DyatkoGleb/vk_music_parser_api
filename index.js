require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.post('/', (req, res) => {
    console.log(req.body)
})

const start = () => {
    try {
        app.listen(port, () => {
            console.log('Server listen on port ' + port)
        })
    } catch (e) {
        console.log(e)
    }
}

start()

// класть в монгу

