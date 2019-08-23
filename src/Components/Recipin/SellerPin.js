import './Recipin.css'
import React from 'react'
import Save from '../Save/Save'
import { ShareOption, View } from 'grommet-icons';

export default class SellerPin extends React.Component{
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
        const { edible } = this.props
        const {user_id} = this.props.edible
        console.log('props from sellerPin:', this.props);
        return (
            <div className={"card"}  >
                         <img id={edible.id} className="img" alt={edible.title} src={edible.image_url} onClick={e => this.showButtons(e)} />
                         <h5 className="card-title">
                         {this.state.isClicked ? `${edible.title}` : 
                    
                        edible.title.length < 18 ? `${edible.title}` : `${edible.title.substring(0, 20)}...`
                        }
                        </h5>
                        {this.state.isClicked ?
                        <div className="hover-buttons">
                            <button  className="share-save-view"><ShareOption color='rgb(203, 9, 9)' /></button>
                            <a id='view' rel="noopener noreferrer" target="_blank" href={this.props.edible.image_url} className="share-save-view" onClick={this.showPage}><View color='rgb(203, 9, 9)' /></a>
                            < Save recipe={edible} user={user_id} id={edible.id}/>
                        </div> :
                        null}
                    </div>
        )
    }
}