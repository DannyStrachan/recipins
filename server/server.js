const path = require('path');
require("dotenv").config({path: __dirname + "/../.env"});
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const rcpCtrl = require('./controllers/recipeController')
const slrCtrl = require('./controllers/sellerController')
const socket = require('socket.io')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express()

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 10 }
}))

massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Delicousness on the way!")

    const io = socket(app.listen(SERVER_PORT, () => 
    console.log(`Salivating on PORT ${SERVER_PORT}!`)))

    // SOCKETS
    io.on('connection', socket => {
        console.log('a user connected');
        // -------------------------------------
        // JOIN ROOM
        socket.on('join room', async data => {
            const db = app.get('db')
            const {roomId, userId, creatorId, roomImg} = data
            let confirmedRoom = await db.find_room(roomId)
            console.log('hit serverside:', confirmedRoom);
            if (!confirmedRoom.length) {
                let messages = await db.create_room(roomId, +userId, +creatorId, roomImg)
                socket.join(roomId)
                io.in(roomId).emit('room joined', messages)
            console.log('sending messages:', messages);
            } else {
                socket.join(confirmedRoom[0].room_id)
                io.in(confirmedRoom[0].room_id).emit('room joined', confirmedRoom)
            }
            // check to see if room exists---sql call
            // if it exists then join room and send back messages history & roomId
            // if !exists then create room
                // join room

        })
        // .in(data.roomId)
        socket.on('send message', data => {
        console.log('console-message is: ', data);
        const {roomId} = data
        console.log('data room:', roomId);
        io.to(roomId).emit('message sent', data)
        // send to data base and get all messages
            
        // socket.emit('message sent', <send back all messages>);
        // console.log('timing server');
        });
        // NEW USER
        socket.on('user signed on', () => {
            console.log('hello new user');
        })
    
        // DISCONNECTED
        socket.on('disconnect', roomId => {
            console.log('user disconnected');
            socket.leave(roomId)
        });

        socket.on('leave all', () => {
            socket.leaveAll()
        })
    
    })
})

// USER ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/api/checkSession', authCtrl.checkSesh)

// PIN ENDPOINTS
app.post('/api/createboard', rcpCtrl.createBoard)
app.get('/api/boards/:userId', rcpCtrl.getUserBoards)
app.post('/api/saved-recipins', rcpCtrl.saveRecipin)
app.get('/api/saved-board-recipins/:boardId', rcpCtrl.getBoardRecipins)
app.get('/api/saved-recipins/:userId', rcpCtrl.getUserRecipins)

// SELLER ENDPOINTS
app.post('/api/create-seller-board', slrCtrl.createBoard)
app.post('/api/create-edible', slrCtrl.createEdible)
app.get('/api/seller-boards/:sellerId', slrCtrl.getSellerBoards)
app.get('/api/saved-board-edibles/:boardId', slrCtrl.getBoardEdibles)
app.get('/api/edible/:id', slrCtrl.getEdible)
app.get('/api/seller-edibles', slrCtrl.getAllEdibles)


app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});