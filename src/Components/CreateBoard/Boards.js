import './CreateBoard.css'
import React, {Component} from 'react'
import BoardCard from './BoardCard'
import {connect} from 'react-redux'
import {getUserBoards} from '../../ducks/recipinReducer'

class Boards extends Component{
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }
    }

    componentDidMount() {
        const {id} = this.props.user.user
        console.log('check userId:', id);
        console.log('props in boards:', this.props);
        this.props.getUserBoards(id)
    }

    render(){
        console.log('this.props.recipinsReducer:', this.props.recipinsReducer);
        const {user} = this.props
            let boardCards = this.props.recipinsReducer.userBoards.map((board, i) => {
                return (
                    
                    <BoardCard showBoards={this.props.showBoards} user={user} recipe={this.props.recipe} id={this.props.id} key={board.id} board={board}/>
                )
            })
        
        
        return (
            
                // <div className="Boards" >{boardCards}</div> 
                this.props.recipinsReducer.userBoards < 0 ?
                null :
                <div className="Boards" >{boardCards}</div> 
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps, {getUserBoards})(Boards)