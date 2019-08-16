import './Profile.css'
import React, {Component} from 'react'
const link = `https://www.pyramidinternational.com/assets/img/products/WDC95580`

export default class Profile extends Component{

    state = {
        pinsClicked: true,
        buttonText: 'Pins'
    }

    toggleDisplay = () => {
        if (this.state.buttonText === 'Pins') {
            this.setState({
                buttonText: 'Boards'
            })
        } else {
            this.setState({
                buttonText: 'Pins'
            })
            
        }
        this.setState({
            pinsClicked: !this.state.pinsClicked
        })
    }

    render(){
        return (
            <div className="Profile">
                <div className="top-half" >
                <div className="profile-info" >
                    <div className="profile-left" >
                        <h1 className="profile-name" >Hello World</h1>
                        <div className="profile-options" >
                            <div className="add-recipe-link" >+</div>
                            <div className="messages-link" >message</div>
                            <div className="seller-profile-link" >$</div>
                        </div>
                    </div>
                    <div className="profile-right" >
                        <img alt="" src={link} />
                    </div>
                </div>

                <div className="filter-buttons" >
                    <button className="toggle-button" onClick={this.toggleDisplay} >{this.state.buttonText}</button>
                    <div className="toggle-switch" >Recipin</div>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <div className="toggle-switch" >Recipurchase</div>
                </div>
                </div>
                
                {this.state.pinsClicked ?
                    <div className="pin-dashboard" >
                    <div className="pin" >Pin1</div>
                    <div className="pin" >Pin2</div>
                    <div className="pin" >Pin3</div>
                    <div className="pin" >Pin4</div>
                    <div className="pin" >Pin5</div>
                </div> :
                <div className="board-dashboard" >
                    <div className="board" >Board1</div>
                    <div className="board" >Board2</div>
                    <div className="board" >Board3</div>
                    <div className="board" >Board4</div>
                    <div className="board" >Board5</div>
                </div>}
                
            </div>
        )
    }
}