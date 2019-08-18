import './CreateBoard.css'
import { AddCircle } from 'grommet-icons';
import React, {Component} from 'react'

export default class CreateBoard extends Component{

    state ={
        isClicked: false,
        boardName: '',
        boardImage: ''
    }

    hideCreate = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleChange = target => {
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value,
            boardImage: this.props.props.recipe.image_url
        })
        console.log('name in create board:', name, 'target in create board:', target);
        console.log('state:', this.state);
        console.log('props:', this.props.props.recipe.image_url);
    }


    render(){
        console.log('props in createboard:', this.props);
        return (
            <div className="CreateBoard">
                {this.state.isClicked ? null : 
                <div className="active-create-board">
                    <div className="close-save" onClick={this.hideCreate} >+</div>
                        <form className="create-board-form" >
                            <div className="add-board" onClick={this.showCreateBoard} ><AddCircle color='rgb(203, 9, 9)' size='large' /></div>
                            <input className="create-input" name="boardName" placeholder="Create Board Here" onChange={e => this.handleChange(e.target)} />
                        </form>
                </div>
                }
                
            </div>
        )
    }
}