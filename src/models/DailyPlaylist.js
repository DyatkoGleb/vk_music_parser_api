const { Schema, model } = require('mongoose')


const DailyPlaylist = new Schema({
    date: {
        type: Date,
        requtre: true
    },
    playlist: {
        type: Object,
        require: true
    }
})


module.exports = model('DailyPlaylist', DailyPlaylist)