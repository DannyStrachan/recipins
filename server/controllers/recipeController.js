module.exports = {
    async createBoard(req, res) {
        const {id, boardName, boardImage} = req.body
        const db = req.app.get('db')
        db.create_board([id, boardName, boardImage])
        .then(res.status(200).send(console.log('Added Board!')))
        .catch(err => res.status(500).send('Add Failure!', err))
        console.log('works:', id, boardName, boardImage)
    },
    async getUserBoards(req, res) {
        console.log('hit controller:', req.params.userId);
        let {userId} = req.params
        console.log('userId req.params:', userId);
        const db = req.app.get('db')
        console.log('userId:', userId);
        let boards = await db.find_user_boards(+userId)
        res.send(boards)
        // console.log('results:', boards)
        // .then(res => res.status(200).send(boards))
        // .catch(err => res.status(500).send(err))
    },
    async saveRecipin(req, res) {
        console.log('hit saveRecipin controller:', req.body)
        const { userId, boardId, publisher, publisher_url, social_rank, title, f2f_url, image_url, source_url, recipe_id } = req.body
        const db = req.app.get('db')
        db.save_recipin([ +userId, +boardId, publisher, publisher_url, +social_rank, title, f2f_url, image_url, source_url, recipe_id ])
        .then(res.status(200).send(console.log('Saved Recipin')))
        .catch(err => res.status(500).send('Add Failure', err))
    },
    async getUserRecipins(req, res) {
        console.log('hit getUserRecipins controller')
        let {boardId} = req.params
        const db = req.app.get('db')
        let boardRecipins = await db.find_board_recipins(+boardId)
        res.send(boardRecipins)
        console.log('results:', boardRecipins);
    }
}