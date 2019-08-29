import "./Edible.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getEdible } from "../../ducks/edibleReducer";
import { ChatOption, Close } from "grommet-icons";
import { Link } from "react-router-dom";
import socket from '../../sockets'

class Edible extends Component {
  constructor(props){
    super(props)
    this.state = {
      combinedIds: ''
    }
  }

  componentDidMount() {
    console.log("id to search:", this.props.match.params.edibleId);
    const { edibleId: id } = this.props.match.params;
    this.props.getEdible(id);
  }

  combineBoth = () => {
    console.log('user ID to be combined:', this.props.user.user.id);
    console.log('seller ID to be combined:', this.props.edibles.currentEdible[0].seller_id);
    const {title} = this.props.edibles.currentEdible[0]
    const {seller_id} = this.props.edibles.currentEdible[0]
    const {id} = this.props.user.user
    const sellerIdString = `${seller_id.toString()}`
    const userIdString = `${id.toString()}`
    const titleString = `${title.toString()}`
    const addColon = ':'
    let combinedIds
      if (sellerIdString >= userIdString) {
        combinedIds = sellerIdString.concat(addColon, userIdString, addColon, titleString)
      
        this.setState({
          combinedIds
        })
      } else {
        combinedIds = userIdString.concat(addColon, sellerIdString, addColon, titleString)
      
        this.setState({
          combinedIds
        })
      }
      console.log('combining...:', combinedIds);
  }

  combineAwait = async () => {
    await this.combineBoth()
    this.startChat()
  }

  startChat = async () => {
    let {combinedIds: roomId} = this.state
    console.log('starting chat:', this.state.combinedIds);
    const {id: userId} = this.props.user.user
    const {seller_id: creatorId} = this.props.edibles.currentEdible[0]
    const {image_url: roomImg} = this.props.edibles.currentEdible[0]
    const data = {roomId, userId, creatorId, roomImg}
    console.log('starting chat data:', data);
    await socket.emit('join room', data)
    // this.props.history.push('/chatroom/')
    window.location.href = `http://localhost:3000/#/chatroom/${roomId}`
  }

  render() {
    console.log("propssssssssss:", this.props);
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
                        <img className="edible-profile-img" alt="" src={this.props.edibles.currentEdible[0].profile_pic} />
                        <div className="edible-title">{this.props.edibles.currentEdible[0].username}</div>
                    </div>

                    <img alt="burger" src={this.props.edibles.currentEdible[0].image_url} />

                    <div className="edible-creator">
                        <ChatOption onClick={this.combineAwait} color="rgb(27, 180, 233)" size="large" />
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
