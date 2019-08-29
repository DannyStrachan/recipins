const {generateLocationMessage} = require('../utils/message')

module.exports = {
    setSocketListeners: function ( socket, db, io ) {

        // JOIN ROOM
        socket.on('join room', async data => {
            const {roomId, userId, creatorId, roomImg} = data
            let confirmedRoom = await db.find_room(roomId)
            if (!confirmedRoom.length) {
                let messages = await db.create_room(roomId, +userId, +creatorId, roomImg)
                socket.join(roomId)
                io.in(roomId).emit('room joined', messages)
            } else {
                socket.join(confirmedRoom[0].room_id)
                io.in(confirmedRoom[0].room_id).emit('room joined', confirmedRoom)
            }
            console.log('User subscribed to:', data);
        })
        socket.on('get existing messages', async data => {
            let messages = await db.get_messages(data)
            io.to(data).emit('message sent', messages)
        })

        // GET ROOMS
        socket.on('get rooms', async id => {
            let foundRooms = await db.get_user_rooms(id)
            socket.emit('found rooms', foundRooms)
        })

        // NEW MESSAGE
        socket.on('send message', async data => {
            console.log('console-message is: ', data);
            const {from, text, roomId, createdAt, userId} = data
            console.log('data room:', roomId);
            await db.add_message(roomId, userId, text, createdAt)
            let messages = await db.get_messages(roomId)
            console.log('coming from db:', messages, from);
            io.to(roomId).emit('message sent', messages)
            // io.to(roomId).emit('message sent', generateMessage(from, text, roomId, createdAt, userId))
        });

        // NEW USER
        socket.on('user signed on', () => {
            console.log('hello new user');
        })

        // LOCATION
        socket.on('createLocationMessage', coords => {
            console.log('location listen:', coords);
            io.to(coords.roomId).emit('location message sent', 
            generateLocationMessage( coords.username, coords.lat, coords.lng ))
        })
    
        // DISCONNECTED
        socket.on('disconnect', roomId => {
            console.log('user disconnected');
            socket.leave(roomId)
        });

        socket.on('leave all', () => {
            socket.leaveAll()
        })
    }
}





// const {generateMessage} = require('../utils/message')

// module.exports = {
//     setSocketListeners: function ( socket, db, io ) {

//         // socket.emit('send message', {
//         //     from: "Admin",
//         //     text: "Welcome to the chat!",
//         //     createdAt: new Date().getTime()
//         // })

//         // JOIN ROOM
//         socket.on('join room', async data => {
//             const {roomId, userId, creatorId, roomImg} = data
//             let confirmedRoom = await db.find_room(roomId)
//             if (!confirmedRoom.length) {
//                 let messages = await db.create_room(roomId, +userId, +creatorId, roomImg)
//                 socket.join(roomId)
//                 io.in(roomId).emit('room joinedz', messages)
//             console.log('sending messages:', messages);
//             } else {
//                 socket.join(confirmedRoom[0].room_id)
//                 io.in(confirmedRoom[0].room_id).emit('room joined', confirmedRoom)
//             }
//             console.log('User subscribed to:', data);
//             // check to see if room exists---sql call
//             // if it exists then join room and send back messages history & roomId
//             // if !exists then create room
//                 // join room

//         })
//         // .in(data.roomId)
//         // NEW MESSAGE
//         socket.on('send message', data => {
//             console.log('console-message is: ', data);
//             const {roomId} = data
//             console.log('data room:', roomId);
//             io.to(roomId).emit('message sent', generateMessage(data.from, data.text))
//         // send to data base and get all messages
            
//         // socket.emit('message sent', <send back all messages>);
//         // console.log('timing server');
//         });
//         // NEW USER
//         socket.on('user signed on', () => {
//             console.log('hello new user');
//         })
    
//         // DISCONNECTED
//         socket.on('disconnect', roomId => {
//             console.log('user disconnected');
//             socket.leave(roomId)
//         });

//         socket.on('leave all', () => {
//             socket.leaveAll()
//         })
//     }
// }