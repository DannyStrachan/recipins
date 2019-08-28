let generateMessage = (from, text, roomId, createdAt, userId) => {
    return {
        from,
        text,
        roomId,
        userId,
        createdAt
        // ,
        // createdAt: new Date().getTime()
    }
}

let generateLocationMessage = (from, lat, lng) => {
    return {
        from,
        text: 'Here is my location',
        url: `https://www.google.com/maps?q=${lat}, ${lng}`,
        createdAt: new Date().getTime()
    }
}

module.exports = {generateMessage, generateLocationMessage}