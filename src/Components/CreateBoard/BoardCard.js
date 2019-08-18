import './CreateBoard.css'
import React from 'react'

export default class Board extends React.Component{
    state = {
        isClicked: false,
        boards: [
            {boardTitle: 'Board 1'},
            {boardTitle: 'Board 2'},
            {boardTitle: 'Board 3'},
            {boardTitle: 'Board 4'},
            {boardTitle: 'Board 5'},
            {boardTitle: 'Board 6'},
            {boardTitle: 'Board 7'}]
    }
    
    addBoard = (e) => {
        console.log('board clicked!', e.target.id);
        console.log('board id passed down', this.props.id);
    }


    render() {
        console.log('Board this.props', this.props);
        // const { board } = this.props
        // console.log('after destructure', recipe);
        return (
            <div className={"card"}  >
                         <img id={this.props.board.board_id} className="img" alt="" src={this.props.board.image_url} onClick={e => this.addBoard(e)} />
                         {/* <h5 className="card-title">
                         {this.state.isClicked ? `${board.title}` : 
                    
                        board.title.length < 18 ? `${board.title}` : `${board.title.substring(0, 20)}...`
                        }
                        </h5> */}
                        <div className="board-title-card">{this.props.board.boardTitle}</div>
                    </div>
        )
    }
}