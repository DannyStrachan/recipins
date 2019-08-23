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

    checkProps = () => {
        const {boardId} = this.props.match.params
        console.log('seller props:', boardId);
        console.log('more:', this.props);
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
            <div className="SellerBoard" >
                {/* <button to="/seller/profile" onClick={() => this.props.history.push('/seller/profile')}className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></button> */}
                {/* <div className="Recipin"></div>
             */}
             {cards}
                {/* <button onClick={this.checkProps}className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></button> */}
                {/* <button onClick={() => this.props.history.push('/seller/profile')}className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></button> */}
                <Link to="/wizard/step4" className="seller-add-board" ><Add onClick={console.log('boards props on click:', this.props)}color='rgb(27, 180, 233)' size='xlarge' /></Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state passed to board:', state);
    return state
}

export default connect(mapStateToProps, {getBoardEdibles})(SellerBoard)