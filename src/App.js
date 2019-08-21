import React, { Component } from "react";
// import axios from "axios";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { connect } from "react-redux";
import { updateUser } from "./ducks/userReducer";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {

  componentDidMount() {
     console.log('hit componentDidUpdate');
    if (this.props.location.pathname !== "/") {
      this.props.updateUser();
    }
  }

  // componentDidMount() {
  //   if (this.props.location.pathname !== '/'){
  //   axios.get('/api/checkSession')
  //   .then(res => {
  //     console.log('data:', res.data);
  //     if (res.data.loggedIn){this.props.updateUser(res.data)}
  //     })
  //   }
  //   console.log('App session:', this.props)
  // }

  // componentDidUpdate() {
  //   axios.get('/api/checkSession')
  //   .then(res => {
  //     if (res.data.loggedIn){this.props.updateUser(res.data)}
  //     })
  //   console.log('App session:', this.props)
  // }

  render() {
    return (
      <div className="App">
        {this.props.location.pathname === "/" ||
        this.props.location.pathname === "/save" ||
        this.props.location.pathname === "/share" ||
        this.props.location.pathname === "/recipe-card" ? null : (
          <Header />
        )}
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);
  return state;
};

export default withRouter(
  connect(
    mapStateToProps,
    { updateUser }
  )(App)
);
