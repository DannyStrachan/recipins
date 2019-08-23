import './CreateBoard.css'
import React, {Component} from 'react'
import { Add } from 'grommet-icons';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getBoardEdibles} from '../../ducks/edibleReducer'
import SellerPin from '../Recipin/SellerPin'

class SellerBoard extends Component{

    componentDidMount() {
        const {boardId} = this.props.match.params
        console.log('boardId from match:', boardId);
        this.props.getBoardEdibles(boardId)
    }

    render(){
        console.log('window object:', window);
        console.log('props:', this.props);
        console.log('state?', this.props);

        let cards = this.props.edibles.boardEdibles.map((edible, i) => {
            return (
                <SellerPin key={edible.id} edible={edible} />
            )
        })
        return (
            // this.props.recipinsReducer.boardRecipins < 0 ?
            // <div className="Board">{cards}</div> :
            // null
            <div className="SellerBoard" >
                <Link to="/seller/profile" className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></Link>
                <div className="Recipin">{cards}</div>
                <Link to="/seller/profile" className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state passed to board:', state);
    return state
}

export default connect(mapStateToProps, {getBoardEdibles})(SellerBoard)