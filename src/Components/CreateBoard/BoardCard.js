import './CreateBoard.css'
import React from 'react'
import axios from 'axios'

export default class Board extends React.Component{
    state = {
        isClicked: false
    }
    
    saveRecipin = (e) => {
        e.preventDefault()
        if (window.location.hash === '#/profile' ){
            this.viewBoard()
        } else if (window.location.hash === '#/seller/profile' ){
                this.viewSellerBoard()
        } else {
        let { id: userId } = this.props.user.user
        let { id: boardId } = e.target
        let { publisher, publisher_url, social_rank, title, f2f_url, image_url, source_url, recipe_id } = this.props.recipe
        console.log('board clicked!', boardId);
        console.log('board pin passed down', publisher, publisher_url, social_rank, title, f2f_url, image_url, source_url, recipe_id);
        console.log('user passed to boardCard:', userId);
        axios
            .post('/api/saved-recipins', { userId, boardId, publisher, publisher_url, social_rank, title, f2f_url, image_url, source_url, recipe_id })
            .then(this.props.showBoards())
            .catch(() => console.log(`Add Recipin Failed!`))
            alert('Saved Recipin!')
        }
    }

    viewBoard = () => {
        console.log('view board', this.props.board.id)
        console.log('window object:', window.location.hash);
        window.location.href = `http://localhost:3000/#/board/${this.props.board.id}`
    }

    viewSellerBoard = () => {
        console.log('view board', this.props.board.id)
        console.log('window object:', window.location.hash);
        window.location.href = `http://localhost:3000/#/seller/board/${this.props.board.id}`
    }

 
    render() {
        console.log('Board this.props', this.props);
        console.log('recipe prop:', this.props.recipe);
        // const { board } = this.props
        // console.log('after destructure', recipe);
        return (
            <div className={"card"}  >
                         <img id={this.props.board.id} className="img" alt="" src={this.props.board.img_url} onClick={e => this.saveRecipin(e)} />
                         {/* <h5 className="card-title">
                         {this.state.isClicked ? `${board.title}` : 
                    
                        board.title.length < 18 ? `${board.title}` : `${board.title.substring(0, 20)}...`
                        }
                        </h5> */}
                        <div className="board-title-card">{this.props.board.board_name}</div>
                    </div>
        )
    }
}