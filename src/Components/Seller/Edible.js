import "./Edible.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getEdible } from "../../ducks/edibleReducer";
import { ChatOption, Close } from "grommet-icons";
import { Link } from "react-router-dom";

class Edible extends Component {
  componentDidMount() {
    console.log("id to search:", this.props.match.params.edibleId);
    const { edibleId: id } = this.props.match.params;
    this.props.getEdible(id);
  }

  render() {
    console.log("propssssssssss:", this.props.user.user);
    if (
      this.props.edibles.currentEdible &&
      this.props.edibles.currentEdible[0]
    ) {
      return (

        <div className="Edible-container">
        <Link to="/seller/profile"><div className="edible-close"><Close /></div></Link>


                <div className="edible-display">

                    <div className="edible-name">{this.props.edibles.currentEdible[0].title}</div>

                    <div className="edible-creator">
                        <img className="edible-profile-img" alt="" src={this.props.user.user.profilePic} />
                        <div className="edible-title">{this.props.user.user.username}</div>
                    </div>

                    <img alt="burger" src={this.props.edibles.currentEdible[0].image_url} />

                    <div className="edible-creator">
                        <ChatOption color="rgb(27, 180, 233)" size="large" />
                        {/* <Currency color='rgb(44, 420, 44)' size='large'/> */}
                        <div className="edible-price">
                            ${this.props.edibles.currentEdible[0].price}
                        </div>
                    </div>

                    <div className="edible-description">{this.props.edibles.currentEdible[0].edible_description}</div>

                </div>


        </div>

      );
    } else return null;
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(
  mapStateToProps,
  { getEdible }
)(Edible);
