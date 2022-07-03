const DailyPlaylist = require('../models/DailyPlaylist')


class DailyPlaylistController {
    async addNewDailyPlaylist(playlist) {
        const date = new Date()
        const currentYear = date.getFullYear()
        const currentMonth = date.getMonth() + 1
        const currentDay = date.getDate()
        const isTodayPlaylistExists = (await DailyPlaylist.find({ date: { $gte: currentYear + '-' + currentMonth + '-' + currentDay } })).length


        if (! isTodayPlaylistExists) {
            const dayliPlaylist = new DailyPlaylist({ date,  playlist })

            await dayliPlaylist.save()
        }
    }

    async getLastDailyPlaylist(req, res) {
        const playlist = (await DailyPlaylist.find().limit(1).sort({$natural:-1}))[0]

        return res.json({ data: playlist})
    }
}


module.exports = new DailyPlaylistController()