const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
    async register(req, res) {
        const db = req.app.get("db")
        const { username, email, password} = req.body
        let [existingUser] = await db.find_user(username)
        if (existingUser) return res.status(400).send('Username already taken...')
        let salt = await bcrypt.genSalt(saltRounds)
        let hash = await bcrypt.hash(password, salt)
        let [user] = await db.create_user([username, email, hash])
        req.session.user = { username: user.username, email: user.email, id: user.id, loggedIn: true }
        // req.session.userId = req.session.user.id
        res.status(200).send(req.session.user)
    },
    async login(req, res) {
        let { username, password } = req.body
        const db = req.app.get("db")
        let [existingUser] = await db.find_user(username)
        if (!existingUser) return res.status(401).send("Username not found...")
        let result = await bcrypt.compare(password, existingUser.password)
        if (result) {
            req.session.user = {
                username: existingUser.username,
                email: existingUser.email,
                id: existingUser.id,
                loggedIn: true
            }
            // req.session.userId = req.session.user.id
            res.send(req.session.user)
        } else res.status(401).send('Username or Password incorrect...')
    },
    async checkSesh(req, res) {
        if (req.session.user) {
            console.log('checkSeshCtrl:', req.session);
            res.send(req.session.user)
        } else {
            res.status(403).send({loggedIn: false})
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}