require('dotenv').config()
const express = require('express')
const db = require('./db')
const cors = require('cors')
const DailyPlaylistController = require('./src/controllers/DailyPlaylistController')

const app = express()
const port = process.env.PORT
const DB_HOST = process.env.DB_HOST 


app.use(cors())
app.use(express.json())
app.post('/', (req, res) => {
    DailyPlaylistController.addNewDailyPlaylist(req.body)
})

const start = () => {
    try {
        db.connect(DB_HOST)
        
        app.listen(port, () => {
            console.log('Server listen on port ' + port)
        })
    } catch (e) {
        console.log(e)
    }
}

start()