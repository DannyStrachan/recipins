import './SellerProfile.css'
// import Boards from '../CreateBoard/Boards'
// import UserRecipins from '../Recipin/UserRecipins'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/userReducer'
import { AddCircle, Pin, Add, ChatOption } from 'grommet-icons';
import CreateBoard from '../CreateBoard/CreateBoard'
const link = `https://www.pyramidinternational.com/assets/img/products/WDC95580`

class Profile extends Component{

    state = {
        pinsClicked: true,
        buttonText: 'Pins',
        addIsClicked: false
    }

    // componentDidMount() {
    //     axios.get('/api/checkSession')
    //     .then(res => {
    //       console.log('data:', res.data);
    //       if (res.data.loggedIn){this.props.updateUser(res.data)}
    //       })
    //     console.log('App session:', this.props)
    //   }

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

    showCreateBoard = () => {
        this.setState({
            addIsClicked: !this.state.addIsClicked
        })
    }

    render(){
         console.log('props inside profile:', this.props);
         console.log('session:', this.props);
        return (
            <div className="Profile">
                <div className="seller-top-half" >
                    <div className="seller-profile-info" >
                        <div className="seller-profile-left" >
                            <h1 className="seller-profile-name" >{this.props.user.user.username}</h1>
                            <div className="seller-profile-options" >
                                <div className="add-recipe-link" onClick={this.showCreateBoard} ><AddCircle color='rgb(203, 9, 9)' size='large' /></div>
                                <div className="messages-link" ><ChatOption color='rgb(27, 180, 233)' size='large' /></div>
                                <Link to="/profile" ><div className="seller-profile-link" ><Pin color='rgb(44, 420, 44)' size='large' /></div></Link>
                            </div>
                        </div>
                        <div className="profile-right" >
                            <img alt="" src={link} />
                        </div>
                        {!this.state.addIsClicked ? null :
                        <CreateBoard props={this.props}/>
                        }
                    </div>

                    {/* <div className="filter-buttons" >
                        <button className="toggle-button" onClick={this.toggleDisplay} >{this.state.buttonText}</button>
                        <div className="toggle-switch" ><Article /></div>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                        <div className="toggle-switch" ><Restaurant /></div>
                    </div> */}
                </div>
                
                {this.state.pinsClicked ?
                <div className="pin-dashboard" >
                    <div className="seller-board-view" >
                        {/* <UserRecipins id={this.props.id} /> */}
                        <Link to="/step1" className="seller-add-board" ><Add color='rgb(27, 180, 233)' size='xlarge' /></Link>
                    </div>
                </div> :
                <div className="board-dashboard" >
                    <div className="board-view" >
                        {/* <Boards id={this.props.id} /> */}
                        <div className="seller-pin-board" ></div>
                    </div>
                </div>}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps, {updateUser})(Profile)