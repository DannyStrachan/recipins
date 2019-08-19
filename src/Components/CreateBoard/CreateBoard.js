import './CreateBoard.css'
import { AddCircle } from 'grommet-icons';
import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
class CreateBoard extends Component{

    state ={
        isClicked: false,
        boardName: '',
        boardImage: '',
        recipe: [],
        user: {}
    }

      createBoard = (e) => {
        e.preventDefault()
        let { boardName, boardImage, recipe } = this.state;
        let {id} = this.state.user
        console.log('data from request:', id, boardName, boardImage, recipe)
        axios
            .post('/api/createboard', { id, boardName, boardImage })
            .then(this.setState({
                isClicked: !this.state.isClicked
            }))
            .catch(() => console.log(`Add Listing Failed!`))
            this.hideCreate()
            this.props.getUserBoards()
    }

    // saveBoard = () => {
    //     // axios.post('/api/createBoard')
    //     console.log('what I need to save board:', this.props.user, this.props.props.recipe)
    //     console.log('state in createBoard:', this.state);
    // }

    hideCreate = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    handleChange = target => {
        const name = target.name
        const value = target.value
        const {recipe} = this.props.props
        const {user} = this.props.props
        this.setState({
            [name]: value,
            boardImage: recipe.image_url,
            recipe,
            user
        })
        console.log('name in create board:', name, 'target in create board:', target);
        console.log('state:', this.state);
        console.log('props:', this.props.props.recipe.image_url);
        // console.log('user from props in createboard:', this.props.user);
    }


    render(){
        console.log('props in createboard:', this.props);
        return (
            <div className="CreateBoard">
                {this.state.isClicked ? null : 
                <div className="active-create-board">
                    <div className="close-save" onClick={this.hideCreate} >+</div>
                        <form className="create-board-form" >
                            <div className="add-board" onClick={e => this.createBoard(e)} ><AddCircle color='rgb(203, 9, 9)' size='large' /></div>
                            <input className="create-input" name="boardName" placeholder="Create Board Here" onChange={e => this.handleChange(e.target)} />
                        </form>
                </div>
                }
                
            </div>
        )
    }
}

export default connect( null )( CreateBoard )