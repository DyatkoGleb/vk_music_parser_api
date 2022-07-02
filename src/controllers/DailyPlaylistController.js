const DailyPlaylist = require('../models/DailyPlaylist')


class DailyPlaylistController {
    async addNewDailyPlaylist(playlist) {
        const date = new Date()
        const currentYear = date.getFullYear()
        const currentMonth = date.getMonth() + 1
        const currentDay = date.getDate()
        const isTodayPlaylistExists = await DailyPlaylist.find({ date: { $gte: currentYear + '-' + currentMonth + '-' + currentDay } })


        if (! isTodayPlaylistExists) {
            const dayliPlaylist = new DailyPlaylist({ date,  playlist })

            await dayliPlaylist.save()
        }
    }
}


module.exports = new DailyPlaylistController()