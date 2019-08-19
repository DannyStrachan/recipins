import './CreateBoard.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBoardRecipins} from '../../ducks/recipinReducer'
import Pin from '../Recipin/Pin'

class Board extends Component{

    componentDidMount() {
        const {boardId} = this.props.match.params
        console.log('boardId from match:', boardId);
        this.props.getBoardRecipins(boardId)
    }

    render(){
        console.log('window object:', window);
        console.log('props:', this.props);
        console.log('state?', this.props);

        let cards = this.props.recipinsReducer.boardRecipins.map((recipe, i) => {
            return (
                <Pin key={recipe.recipe_id} recipe={recipe} />
                    // <div>
                    //     <h5>{recipe}</h5>
                    // </div>
            )
        })
        return (
            // this.props.recipinsReducer.boardRecipins < 0 ?
            // <div className="Board">{cards}</div> :
            // null
            <div className="Board" ><div className="Recipin">{cards}</div></div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state passed to board:', state);
    return state
}

export default connect(mapStateToProps, {getBoardRecipins})(Board)