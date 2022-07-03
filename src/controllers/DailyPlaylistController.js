const DailyPlaylist = require('../models/DailyPlaylist')


class DailyPlaylistController {
    async addNewDailyPlaylist(playlist) {
        const date = new Date()
        const currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        const isTodayPlaylistExists = (await DailyPlaylist.find({ date: { $gte: currentDate } })).length


        if (!isTodayPlaylistExists) {
            for (let song in playlist) {
                playlist[song] = playlist[song].trim().replace(/\n/g, '')
            }

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