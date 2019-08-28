require("dotenv").config({path: __dirname + "/../.env"});
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const rcpCtrl = require('./controllers/recipeController')
const slrCtrl = require('./controllers/sellerController')
const socket = require('socket.io')
const ssl = require('./controllers/socketController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express()

app.use( express.static( `${__dirname}/../build` ) );

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
        console.log('A new user just connected');
        // -------------------------------------
        ssl.setSocketListeners(socket, db, io)
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


// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });