import './AllSellers.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllEdibles} from '../../ducks/edibleReducer'
import SellerPin from '../Recipin/SellerPin'

class AllSellers extends Component{

    componentDidMount() {
        this.props.getAllEdibles()
    }

    render() {

        let cards = this.props.edibles.allEdibles.map((edible, i) => {
            return (
                <SellerPin key={edible.id} edible={edible} />
            )
        })
        console.log('allEdibles:', this.props.edibles)
        return (
            <div className="AllSellers-container">{cards}</div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps, {getAllEdibles})(AllSellers)