import "./Dashboard.css";
import React, { Component } from "react";
import Recipin from "../Recipin/Recipin";

export default class Dashboard extends Component {
  // showsHover = () => {if (document.querySelector('.card-button').style.display === 'none'){
  //     document.querySelector('.card-button').style.display = 'block'
  // } document.querySelector('.card-button').style.display = 'block'
  // }onClick={this.showsHover}

  render() {
    return (
      <div className="Dashboard">
        <Recipin />
        <div className="hover-div">
          <button className="card-button">Share</button>
          <button className="card-button">View</button>
          <button className="card-button">Save</button>
        </div>
      </div>
    );
  }
}
