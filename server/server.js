require("dotenv").config({
    path: __dirname + "/../.env"
  });
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./controllers/authController')
// const rcpeCtrl = require('./controllers/recipeController')
// const userCtrl = require('./controllers/userController')
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

// ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
