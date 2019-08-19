import "./Dashboard.css";
import React, { Component } from "react";
import Recipin from "../Recipin/Recipin";

export default class Dashboard extends Component {

  render() {
    console.log('this.props in dashboard:', this.props);
    return (
      <div className="Dashboard">
        <Recipin />
      </div>
    );
  }
}
