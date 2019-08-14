import "./Landing.css";
import React, { Component } from "react";

export default class Landing extends Component {

    showLogin = () => {
        document.querySelector('.auth').style.display = 'flex'
        document.querySelector('.login').style.display = 'flex'
        document.querySelector('.register').style.display = 'none'
    }

    showRegister = () => {
        document.querySelector('.register').style.display = 'flex'
        document.querySelector('.login').style.display = 'none'
    }

    closeAuth = () => {
        document.querySelector('.login').style.display = 'none'
        document.querySelector('.auth').style.display = 'none'
    }

  render() {
    return (
      <div className="Landing">
        <div className="slide-show">
          <h1 className="title">Recipins</h1>
        </div>
        <div className="start">
          <button className="get-started" onClick={this.showLogin} >Get Started</button>
          <div className="welcome">
            Hi, Welcome to Recipins! You can view recipes and add your favorites
            to your boards. Feeling hungry? Get started today!
          </div>
        </div>
        <div className="auth" >
            <div className="login">
                <form action="" >
                    <div className="close" onClick={this.closeAuth}>+</div>
                    <img alt="" src="https://media.istockphoto.com/vectors/healthy-nature-food-logo-design-template-vector-id1011267000" />
                    <div className="login-input">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                    </div>
                    <div className="buttons">
                        <button className="register-btn" onClick={this.showRegister} >Register</button>
                        <button className="submit">Login</button>
                    </div>
                </form>
            </div>
            <div className="register">
                <form action="" >
                    <div className="close" onClick={this.closeAuth}>+</div>
                    <img alt="" src="https://media.istockphoto.com/vectors/healthy-nature-food-logo-design-template-vector-id1011267000" />
                    <div className="register-input">
                        <div className="register-input1" >
                            <input type="text" placeholder="Username" />
                            <input type="text" placeholder="Email" />
                        </div>
                        <div className="register-input2" >
                            <input type="text" placeholder="Password" />
                            <input type="text" placeholder="Confirm Password" />
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="register-btn" onClick={this.showLogin} >Sign In</button>
                        <button className="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    );
  }
}
