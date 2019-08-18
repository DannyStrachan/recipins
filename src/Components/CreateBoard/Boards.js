import './CreateBoard.css'
import React, {Component} from 'react'
import BoardCard from './BoardCard'
import {connect} from 'react-redux'

class Boards extends Component{
    constructor(props) {
        super(props)

        this.state = {
            boards: [
                {boardTitle: 'Dessert', board_id: 1, image_url: 'https://i.pinimg.com/originals/13/ff/2d/13ff2d3c3455b14121a5edab85d161e8.gif'},
                {boardTitle: 'Snacks', board_id: 2},
                {boardTitle: 'Healthy Meals', board_id: 3},
                {boardTitle: 'Quick Eats', board_id: 4},
                {boardTitle: 'Smoothies', board_id: 5},
                {boardTitle: 'Cakes', board_id: 6},
                {boardTitle: 'Mexican Meals', board_id: 7}]
        }
    }

    render(){
        
            let boardCards = this.state.boards.map((board, i) => {
                // console.log('mapping', boardCards)
                return (
                    
                    <BoardCard id={this.props.id} key={board.board_id} board={board}/>
                    // <div>hello</div>
                )
            })
        
        
        return (
            
                <div className="Boards" >{boardCards}</div> 
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps)(Boards)