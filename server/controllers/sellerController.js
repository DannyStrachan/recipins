module.exports = {
    async createBoard(req,res) {
        const {boardImage, boardName, sellerId, edibleImage, edibleName, description, price} = req.body
        const db = req.app.get('db')
        let results = await db.create_seller_board([sellerId, boardName, boardImage])
        console.log('results:', results)
        const {id: boardId} = results[0]
        console.log('id:', boardId);
        db.create_edible([sellerId, boardId, edibleImage, edibleName, description, price])
        // .then(() => res.status(200).send('Added Board and Edible!'))
        res.status(200).send('Added Board and Edible!')
        // .catch(err => res.status(400).send('Add Failure!', err))
    },
    async getSellerBoards(req, res) {
        const db = req.app.get('db')
        let {sellerId} = req.params
        let boards = await db.find_seller_boards(+sellerId)
        res.send(boards)
    }
}

// (async () => {
//     try {
//       let num = await promise13();
//       console.log('num', num);
//     } catch(e) {
//       console.log('Error caught');
//     }
//   })();