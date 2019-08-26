import './Profile.css'
import Boards from '../CreateBoard/Boards'
import UserRecipins from '../Recipin/UserRecipins'
import AllSellers from '../Seller/AllSellers'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
// import axios from 'axios'
import {connect} from 'react-redux'
import {updateUser} from '../../ducks/userReducer'
import { AddCircle, Currency, Restaurant, Article } from 'grommet-icons';
import { ChatOption } from 'grommet-icons';
import CreateBoard from '../CreateBoard/CreateBoard'
// const link = `https://www.pyramidinternational.com/assets/img/products/WDC95580`

class Profile extends Component{

    state = {
        pinsClicked: true,
        buttonText: 'Pins',
        addIsClicked: false,
        isClicked: false
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

    changeView = () => {
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
         console.log('props inside profile:', this.props);
         console.log('session:', this.props);
         console.log('profile-window:', window.location.hash);
        return (
            <div className="Profile">
                <div className="top-half" >
                <div className="profile-info" >
                    <div className="profile-left" >
                        <h1 className="profile-name" >{this.props.user.user.username}</h1>
                        <div className="profile-options" >
                            <div className="add-recipe-link" onClick={this.showCreateBoard} ><AddCircle color='rgb(203, 9, 9)' size='large' /></div>
                            <div className="messages-link" ><ChatOption color='rgb(27, 180, 233)' size='large' /></div>
                            <Link to="/seller/profile" ><div className="seller-profile-link" ><Currency color='rgb(44, 420, 44)' size='large' /></div></Link>
                        </div>
                    </div>
                    <div className="profile-right" >
                        <img alt="" src={this.props.user.user.profilePic} />
                    </div>
                    {!this.state.addIsClicked ? null :
                    <CreateBoard props={this.props}/>
                    }
                </div>

                <div className="filter-buttons" >
                    <button className="toggle-button" onClick={this.toggleDisplay} >{this.state.buttonText}</button>
                    <div className="toggle-switch" ><Article /></div>
                    <label className="switch">
                        <input onClick={this.changeView} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <div className="toggle-switch" ><Restaurant /></div>
                </div>
                </div>
                { this.state.isClicked ? 
                    <div className="edible-dashboard" >
                        {/* <div className="edible-view" > */}
                            <AllSellers  />
                        {/* </div> */}
                    </div>  : 
                <div>
                {this.state.pinsClicked ?
                <div className="pin-dashboard" >
                    <div className="board-view" >
                        <UserRecipins id={this.props.id} />
                    </div>
                </div> :
                <div className="board-dashboard" >
                    <div className="board-view" >
                        <Boards id={this.props.id} />
                    </div>
                </div>} 
                </div>
            }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('state', state);
    return state
}

export default connect(mapStateToProps, {updateUser})(Profile)