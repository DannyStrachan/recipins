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

    showNav = () => {
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
        return (
            <div className="Save">
            { this.state.isClicked ?
                <div className="save-open">
                    <div className="save-header" >
                        <div className="close-save" onClick={this.showNav} >+</div>
                        <h3 className="header-title" >Choose Board</h3>
                    </div>
                    <br/>
                    <div className="board-list" >
                    <Boards id={this.props.id} />
                    </div>
                    {/* <ul className="board-list" >
                        <li className="card">Board 1</li>
                        <li className="card">Board 2</li>
                        <li className="card">Board 3</li>
                        <li className="card">Board 4</li>
                        <li className="card">Board 5</li>
                        <li className="card">Board 6</li>
                        <li className="card">Board 7</li>
                    </ul> */}
                    <br/>
                    <div className="create-board" >
                        <div className="add-board" onClick={this.showCreateBoard} ><AddCircle color='rgb(203, 9, 9)' size='large' /></div>
                        <h3 className="header-title" >Create Board</h3>
                    </div>
                    {!this.state.addIsClicked ? null :
                    <CreateBoard props={this.props}/>
                    }
                </div>
                 :
                 <div className=" Nav-close" >
                    <button className="share-save-view" onClick={this.showNav} ><Pin color='rgb(203, 9, 9)' /></button>
                 </div>
            }
            </div>
        )
    }
}