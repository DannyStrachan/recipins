import "./Landing.css";
import React, { Component } from "react";
import { connect } from 'react-redux'
import { signup, login } from '../../ducks/userReducer'
// import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    // componentDidMount() {
    // }

    showLogin = (e) => {
        e.preventDefault()
        document.querySelector('.auth').style.display = 'flex'
        document.querySelector('.login').style.display = 'flex'
        document.querySelector('.register').style.display = 'none'
    }

    showRegister = (e) => {
        e.preventDefault()
        document.querySelector('.auth').style.display = 'flex'
        document.querySelector('.register').style.display = 'flex'
        document.querySelector('.login').style.display = 'none'
    }

    closeAuth = (e) => {
        e.preventDefault()
        document.querySelector('.login').style.display = 'none'
        document.querySelector('.auth').style.display = 'none'
        document.querySelector('.register').style.display = 'none'
    }

    handleChange= e => {
        let { name, value } = e.target
        this.setState({ [name]: value })
        console.log('username:', this.state.username, 'password:', this.state.password);
    }

    signupUser = (e) => {
        e.preventDefault()
        let { username, email, password, confirmPassword } = this.state
        if (password !== confirmPassword) {
            alert('Passwords must match!')
        } else {
            this.props.signup( username, email, password )
        }
    }

    loginUser = (e) => {
        e.preventDefault()
        let { username, password } = this.state
        this.props.login( username, password )
    }

  render() {
      let { username, password, email, confirmPassword } = this.state
    let { user } = this.props
    if (user.loggedIn) return <Redirect to="/dashboard" />
    return (
      <div className="Landing">
        <div className="slide-show">
          <h1 className="title">Recipins</h1>
        </div>
        <div className="start">
          <button className="get-started" onClick={e => this.showLogin(e)} >Get Started</button>
          <div className="welcome">
            Hi, Welcome to Recipins! You can view recipes and add your favorites
            to your boards. Feeling hungry? Get started today!
          </div>
        </div>
        <div className="auth" >
            <div className="login">
                <form action="" >
                    <div className="close" onClick={e => this.closeAuth(e)}>+</div>
                    <img alt="" src="https://media.istockphoto.com/vectors/healthy-nature-food-logo-design-template-vector-id1011267000" />
                    <div className="login-input">
                    <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                    <input type="password" value={password} name="password" onChange={this.handleChange} placeholder="Password" />
                    </div>
                    <div className="buttons">
                        <button className="register-btn" onClick={e => this.showRegister(e)} >Register</button>
                        <button className="submit" onClick={e => this.loginUser(e)} >Login</button>
                    </div>
                </form>
            </div>
            <div className="register">
                <form action="" >
                    <div className="close" onClick={e => this.closeAuth(e)}>+</div>
                    <img alt="" src="https://media.istockphoto.com/vectors/healthy-nature-food-logo-design-template-vector-id1011267000" />
                    <div className="register-input">
                        <div className="register-input1" >
                            <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username" />
                            <input type="text" name="email" value={email} onChange={this.handleChange} placeholder="Email" />
                        </div>
                        <div className="register-input2" >
                            <input type="password" value={password} name="password" onChange={this.handleChange} placeholder="Password" />
                            <input type="password" value={confirmPassword} name="confirmPassword" onChange={this.handleChange} placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="register-btn" onClick={e => this.showLogin(e)} >Sign In</button>
                        <button className="submit" onClick={e => this.signupUser(e)} >Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state
}

export default connect( mapStateToProps, { signup, login } )( Landing )
