import "./Dashboard.css";
import React, { Component } from "react";
import Recipin from "../Recipin/Recipin";
import AllSellers from '../Seller/AllSellers'
import { Restaurant, Article } from 'grommet-icons';

export default class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      isClicked: false
    }
  }

  changeView = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {
    console.log('this.props in dashboard:', this.props);
    console.log('input value:', this.state.isClicked)
    return (
      <div className="Dashboard">
        <div className="header-filter-buttons" >
                    <div className="toggle-switch" ><Article /></div>
                    <label className="switch">
                        <input onClick={this.changeView} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <div className="toggle-switch" ><Restaurant /></div>
                </div> 
                { this.state.isClicked ? <AllSellers /> : <Recipin /> }
      </div>
    );
  }
}
