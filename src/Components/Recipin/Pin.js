import React from 'react'

export default class Pin extends React.Component{
    state = {
        isClicked: false
    }
    
    showButtons = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    showPage = () => {
        // this.props.location.push("/about")
        console.log('showPage function:', this.props.recipe.f2f_url);
        // return <Redirect to={this.props.recipe.f2f_url} />
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
                            <a href={this.props.recipe.f2f_url} className="share-save-view" onClick={this.showPage}>View</a>
                            <button className="share-save-view">Save</button>
                        </div> :
                        null}
                    </div>
        )
    }
}