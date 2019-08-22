require("dotenv").config({
    path: __dirname + "/../.env"
  });
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const rcpCtrl = require('./controllers/recipeController')
const slrCtrl = require('./controllers/sellerController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express()

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))



massive(CONNECTION_STRING).then(db => {
    app.set("db", db)
    console.log("Lick those chops, we got Delicousness on the way!")
    app.listen(SERVER_PORT, () => {
        console.log(`Rumblin on PORT ${SERVER_PORT}!`)
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
app.get('/api/seller-boards/:sellerId', slrCtrl.getSellerBoards)