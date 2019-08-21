import './Recipin.css'
import React, {Component} from 'react'
import Pin from './Pin'
// import axios from 'axios'
import {updateUser} from '../../ducks/userReducer'
// import store from '../../ducks/store'
import {connect} from 'react-redux'

class Recipin extends Component{
    constructor(props) {
        super(props)
        // const reduxState = store.getState()
        // console.log('reduxState:', reduxState);

    console.log('props.recipinsReducer.recipins in Recipin:', this.props.recipinsReducer.recipins)
        this.state = {
            recipins: Object.keys(this.props.recipinsReducer.recipins).length > 0 ? props.recipinsReducer.recipins : props.recipinsReducer.recipins
        }
    }

    // componentDidMount() {
    //     axios.get('/api/checkSession')
    //     .then(res => {
    //       console.log('data:', res.data);
    //       if (res.data.loggedIn){this.props.updateUser(res.data)}
    //       })
    //     console.log('App session:', this.props)
    //   }

    render(){
        console.log('props in Recipin', this.props.user);
        console.log('state recipins in Recipin:', this.state.recipins);
        console.log('true or false', this.props.recipinsReducer.recipins === this.state.recipins);
        let {user} = this.props.user
        console.log('user after destructure:', user);
        
            let cards = this.props.recipinsReducer.recipins.map((recipe, i) => {
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

export default connect(mapStateToProps, {updateUser})(Recipin)