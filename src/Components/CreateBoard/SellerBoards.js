import './CreateBoard.css'
import React, {Component} from 'react'
import BoardCard from './BoardCard'
import { Add } from 'grommet-icons';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getSellerBoards} from '../../ducks/edibleReducer'

class SellerBoards extends Component{
    constructor(props) {
        super(props)

        this.state = {
            boards: []
        }
    }

    

    componentDidMount() {
        const {id} = this.props.user.user
        console.log('check sellerId:', id);
        console.log('props in boards:', this.props);
        this.props.getSellerBoards(id)
    }

    render(){
        console.log('this.props.recipinsReducer:', this.props.edibles.sellerBoards);
        // const {user} = this.props
            let boardCards = this.props.edibles.sellerBoards.map((board, i) => {
                return (
                    
                    <BoardCard showBoards={this.props.showBoards} recipe={this.props.recipe} id={this.props.id} key={board.id} board={board}/>
                    // <div className="Test" key={board.id}>hello</div>
                )
            })
        
        
        return (
            
            this.props.recipinsReducer.userBoards < 0 ?
            null :
            <div className="Boards" >
            {boardCards}
            <Link to="/wizard/step1" className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></Link>
            </div> 
        )
        // return (
        //     <div></div>
        // )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps, {getSellerBoards})(SellerBoards)