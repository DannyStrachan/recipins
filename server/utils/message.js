const moment = require('moment')

let generateMessage = (from, text, roomId, createdAt, userId) => {
    return {
        username: from,
        message: text,
        roomId,
        userId,
        created_at: createdAt
        // ,
        // createdAt: new Date().getTime()
    }
}

let generateLocationMessage = (from, lat, lng) => {
    return {
        from,
        text: 'Here is my location',
        url: `https://www.google.com/maps?q=${lat}, ${lng}`,
        createdAt: moment().startOf('minute').fromNow(),
        profile_pic: `https://robohash.org/${from}`
    }
}

module.exports = {generateMessage, generateLocationMessage}