import './Recipin.css'
import React, {Component} from 'react'
import Pin from './Pin'
import {connect} from 'react-redux'
import {getUserRecipins} from '../../ducks/recipinReducer'

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

    componentDidMount() {
        const {id: userId} = this.props.user.user
        console.log('componentDidMount:', userId);
        this.props.getUserRecipins(userId)
    }

    render(){
        let {user} = this.props.user
        console.log('user after destructure in UserRecipins:', user);
        
            let cards = this.props.recipinsReducer.userRecipins.map((recipe, i) => {
                console.log('mapping', recipe)
                return (
                    
                    <Pin key={recipe.recipe_id} user={user} recipe={recipe}/>
                    
                )
            })
        
        
        return (
            // this.state.recipins > 0 ?
            //     null :
                <div className="Boards" >{cards}</div> 
            // console.log('cards', cards)
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps, {getUserRecipins})(UserRecipins)