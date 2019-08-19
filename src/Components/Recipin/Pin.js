import './Recipin.css'
import React from 'react'
import Save from '../Save/Save'
import { ShareOption, View } from 'grommet-icons';

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
        console.log('Pin this.props recipe', this.props.recipe);
        console.log('user passed to pin:', this.props.user);
        const { recipe, user } = this.props
        console.log('after destructure', recipe);
        return (
            <div className={"card"}  >
                         <img id={recipe.recipe_id} className="img" alt={recipe.publisher} src={recipe.image_url} onClick={e => this.showButtons(e)} />
                         <h5 className="card-title">
                         {this.state.isClicked ? `${recipe.title}` : 
                    
                        recipe.title.length < 18 ? `${recipe.title}` : `${recipe.title.substring(0, 20)}...`
                        }
                        </h5>
                        {this.state.isClicked ?
                        <div className="hover-buttons">
                            <button  className="share-save-view"><ShareOption color='rgb(203, 9, 9)' /></button>
                            <a id='view' href={this.props.recipe.source_url} className="share-save-view" onClick={this.showPage}><View color='rgb(203, 9, 9)' /></a>
                            < Save recipe={recipe} user={user} id={recipe.recipe_id}/>
                        </div> :
                        null}
                    </div>
        )
    }
}