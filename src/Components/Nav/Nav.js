import "./Nav.css";
import React, { Component } from "react";
import {
  Menu,
  Currency,
  ContactInfo,
  CircleInformation,
  Power
} from "grommet-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {logoutUser} from '../../ducks/userReducer'
import axios from "axios";

class Nav extends Component {
  state = {
    isClicked: false
  };

  showNav = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  logout = () => {
    axios.delete('/auth/logout').then(() => {
      this.props.logoutUser()
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div className="Nav">
        {this.state.isClicked ? (
          <div className="Nav-open">
            <div className="hamburger-icon" onClick={this.showNav}>
              <Menu color="whitesmoke" size="33px" />
            </div>
            <br />
            <ul className="nav-links">
              <Link to="/profile">
                <li className="profile-link" onClick={this.showNav}>
                  <ContactInfo size="xlarge" color="rgb(9, 44, 180)" />
                </li>
              </Link>
              <li className="seller-link" onClick={this.showNav}>
                <Link to="/seller/profile"><Currency color="rgb(44, 420, 44)" size="xlarge" /></Link>
              </li>
              <Link to="/about">
                <li className="about-link" onClick={this.showNav}>
                  <CircleInformation size="large" />
                </li>
              </Link>
            </ul>
            <Link to="/">
              <div className="logout-link" onClick={this.logout}>
                <Power size="xlarge" color="rgb(146, 42, 42)" />
              </div>
            </Link>
          </div>
        ) : (
          <div className=" Nav-close">
            <div className="hamburger-icon" onClick={this.showNav}>
              <Menu color="whitesmoke" size="33px" />
            </div>
          </div>
        )}
      </div>
    );
  }
}


function mapStateToProps(reduxState) {
    const { user } = reduxState
    return { user }
  }
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(withRouter(Nav))