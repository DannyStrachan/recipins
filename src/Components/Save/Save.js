import './Save.css'
import '../Nav/Nav.css'
import CreateBoard from '../CreateBoard/CreateBoard'
import Boards from '../CreateBoard/Boards'
import { AddCircle, Pin } from 'grommet-icons';
import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
export default class Nav extends Component{

    state={
        isClicked: false,
        addIsClicked: false
    }

    showBoards = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    showCreateBoard = () => {
        this.setState({
            addIsClicked: !this.state.addIsClicked
        })
    }

    render(){
        console.log('id passed through props', this.props.id);
        const {user, recipe} = this.props
        return (
            <div className="Save">
            { this.state.isClicked ?
                <div className="save-open">
                    <div className="save-header" >
                        <div className="close-save" onClick={this.showBoards} >+</div>
                        <h3 className="header-title" >Choose Board</h3>
                    </div>
                    <br/>
                    <div className="board-list" >
                    <Boards recipe={recipe} user={user} id={this.props.id} showBoards={this.showBoards} />
                    </div>
                    <br/>
                    <div className="create-board" >
                        <div className="add-board" onClick={this.showCreateBoard} ><AddCircle color='rgb(203, 9, 9)' size='large' /></div>
                        <h3 className="header-title" >Create Board</h3>
                    </div>
                    {!this.state.addIsClicked ? null :
                    <CreateBoard user={user} recipe={recipe}/>
                    }
                </div>
                 :
                 <div className=" Nav-close" >
                    <button className="share-save-view" onClick={this.showBoards} ><Pin color='rgb(203, 9, 9)' /></button>
                 </div>
            }
            </div>
        )
    }
}