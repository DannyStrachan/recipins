import './Recipin.css'
import React from 'react'

export default class Pin extends React.Component{
    state = {
        isClicked: false
    }
    
    showButtons = () => {
        // if (this.state.isClicked === true) {
        //     this.setState({
        //         isClicked: false
        //     })
        // }
        this.setState({
            isClicked: !this.state.isClicked
        })
        // if (this.state.isClicked === true) {
        //     document.querySelector('.card').style.borderColor = "red"
        // } else {
        //     document.querySelector('.card').style.height = "28%"
        // }
    }


    render() {
        const { recipe } = this.props
        return (
            <div className={"card"} onClick={e => this.showButtons(e)} >
                        <img id={recipe.recipe_id} className="img" alt={recipe.publisher} src={recipe.image_url} />
                        <div className="card-title">{recipe.title}</div>
                        {this.state.isClicked ?
                        <div className="hover-buttons">
                            <button  className="share-save-view">Share</button>
                            <a id='view' href={this.props.recipe.source_url} className="share-save-view" onClick={this.showPage}>View</a>
                            <button className="share-save-view">Save</button>
                        </div> :
                        null}
                    </div>
        )
    }
}