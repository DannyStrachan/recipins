import './Recipin.css'
import React, {Component} from 'react'
import Pin from './Pin'
// import store from '../../ducks/store'
import {connect} from 'react-redux'

class Recipin extends Component{
    constructor(props) {
        super(props)
        // const reduxState = store.getState()
        // console.log('reduxState:', reduxState);
        this.state = {
            recipins: Object.keys(props.recipinsReducer.recipins).length > 0 ? props.recipinsReducer.recipins : props.recipins.recipins
        }
    }

    componentDidUpdate() {
        // store.subscribe(() => {
        //     store.getState()
        // })
    }

    render(){
        console.log('props', this.props);
        
            let cards = this.state.recipins.map((recipe, i) => {
                return (
                    <Pin key={recipe.recipe_id} recipe={recipe}/>
                )
            })
        
        
        return (
            this.state.recipins.length > 0 ?
                <div className="Recipin" >{cards}</div> :
                null
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps)(Recipin)