module.exports = {
    createBoard(req,res) {
        const {sellerId, boardName, boardImage} = req.body
        const db = req.app.get('db')
        db.create_seller_board([sellerId, boardName, boardImage])
        .then(res.status(200).send('Added Board!'))
        .catch(err => res.status(500).send('Add Failure!', err))
    },
    async getSellerBoards(req, res) {
        const db = req.app.get('db')
        let {sellerId} = req.params
        let boards = await db.find_seller_boards(+sellerId)
        res.send(boards)
    }
}