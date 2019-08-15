import './Recipin.css'
import React, {Component} from 'react'
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

    // Map through here

    render(){
        console.log('props', this.props);
        
            let cards = this.state.recipins.map((recipe, i) => {
                return (
                    <div key={recipe.recipe_id} className="card" >
                        <img className="img" alt={recipe.publisher} src={recipe.image_url} />
                        {/* Title: {recipe.title} */}
                        <div className="card-title">{recipe.title}</div>
                    </div>
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