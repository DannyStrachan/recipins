import './Nav.css'
import React, {Component} from 'react'
import { Menu, Currency, ContactInfo, CircleInformation, Power } from 'grommet-icons';
import {Link} from 'react-router-dom'
export default class Nav extends Component{

    state={
        isClicked: false
    }

    showNav = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return (
        <div className="Nav">
            { this.state.isClicked ?
                <div className="Nav-open">
                    <div className="hamburger-icon" onClick={this.showNav}><Menu color='whitesmoke' size='33px' /></div>
                    <br/>
                    <ul className="nav-links" >
                        <Link to="/profile" ><li className="profile-link" onClick={this.showNav} ><ContactInfo size='xlarge' color='rgb(9, 44, 180)' /></li></Link>
                        <li className="seller-link"><Currency color='rgb(44, 420, 44)' size='xlarge' /></li>
                        <Link to="/about" ><li className="about-link" onClick={this.showNav} ><CircleInformation size='large' /></li></Link>
                    </ul>
                    <Link to="/" ><div className="logout-link" ><Power size='xlarge' color='rgb(146, 42, 42)' /></div></Link>
                </div>
                 :
                 <div className=" Nav-close" >
                     <div className="hamburger-icon" onClick={this.showNav}><Menu color='whitesmoke' size='33px' /></div>
                 </div>
            }
            </div>
        )
    }
}