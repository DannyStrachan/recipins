import './Recipin.css'
import React, {Component} from 'react'
import Pin from './Pin'
import {connect} from 'react-redux'

class UserRecipins extends Component{
    constructor(props) {
        super(props)
        // const reduxState = store.getState()
        // console.log('reduxState:', reduxState);

    console.log('props.recipinsReducer.recipins in Recipin:', this.props.recipinsReducer.recipins)
        this.state = {
            recipins: Object.keys(this.props.recipinsReducer.recipins).length > 0 ? props.recipinsReducer.recipins : props.recipinsReducer.recipins
        }
    }

    componentDidUpdate() {
        // store.subscribe(() => {
        //     store.getState()
        // })
    }

    render(){
        console.log('props in Recipin', this.props.user);
        console.log('state recipins in Recipin:', this.state.recipins);
        console.log('true or false', this.props.recipinsReducer.recipins === this.state.recipins);
        let {user} = this.props.user
        console.log('user after destructure:', user);
        
            let cards = this.props.recipinsReducer.userRecipins.map((recipe, i) => {
                console.log('mapping', recipe)
                return (
                    
                    <Pin key={recipe.recipe_id} user={user} recipe={recipe}/>
                    
                )
            })
        
        
        return (
            this.state.recipins > 0 ?
                null :
                <div className="Recipin" >{cards}</div> 
            // console.log('cards', cards)
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps)(UserRecipins)