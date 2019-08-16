import './Nav.css'
import React, {Component} from 'react'
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
                    <div className="hamburger-icon" onClick={this.showNav}>=</div>
                    <br/>
                    <ul className="nav-links" >
                        <Link to="/profile" ><li className="profile-link" onClick={this.showNav} >PROFILE</li></Link>
                        <li className="seller-link">$</li>
                        <Link to="/about" ><li className="about-link" onClick={this.showNav} >ABOUT</li></Link>
                    </ul>
                    <Link to="/" ><div className="logout-link" >LOGOUT</div></Link>
                </div>
                 :
                 <div className=" Nav-close" >
                     <div className="hamburger-icon" onClick={this.showNav}>=</div>
                 </div>
            }
            </div>
        )
    }
}