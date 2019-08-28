import "./ChatRoom.css"
import { Close } from "grommet-icons";
import socket from '../../sockets'
import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
const moment = require('moment')
class ChatRoom extends Component{
    state = {
        text: '',
        messages: [],
        roomId: '',
        obj: {}
    }

    componentDidMount() {
        console.log('state set');
        socket.on('room joined', async data => {
            console.log('room Id on join:', data);
          await this.setState({
            obj: data[0],
            roomId: data[0].room_id
          })
          socket.emit('get existing messages', data[0].room_id)
          console.log('state after return:', this.state);
        })
        socket.on('message sent', data => {
            console.log('sent message received: ', data);
            // let messagesArray = [...this.state.messages]
            // messagesArray.push(data)
            this.setState({
                // text: data.text,
                messages: data
            })
        });
        socket.on('location message sent', data => {
            console.log('loaction received: ', data);
            let messagesArray = [...this.state.messages]
            messagesArray.push(data)
            console.log('msgAry:', messagesArray, "data:", data);
            this.setState({
                text: data.text,
                messages: messagesArray
            })
        });
    }

    // componentWillUnmount() {
    //     socket.emit('disconnect', this.state.roomId)
    // }

    sendMessage = (e) => {
        e.preventDefault()
        const inputValue = e.target.elements.chatInput.value
        const {username, id} = this.props.user.user
        const {roomId} = this.state
        console.log('user:', username);
        console.log('value to send:', inputValue);
        // console.log('socket', socket.emit);
        socket.emit('send message', {
            text: inputValue,
            from: username,
            roomId,
            userId: id,
            createdAt: moment().startOf('minute').fromNow()
        })
            document.getElementsByClassName('chat-input')[0].value=null
    }

    findLocation = () => {
        console.log('roooom:', this.state.roomId);
        const {roomId} = this.state
        const {username} = this.props.user.user
        if(!navigator.geolocation) {
            return alert('Geoloaction is not supported by your browser...')
        }

        navigator.geolocation.getCurrentPosition(function (position) 
        {
            console.log('position');
            socket.emit('createLocationMessage', {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                roomId,
                username
            })
        }, function () {
            alert('Unable to fetch location...')
        })
    }

    render() {
        console.log('state obj:', this.state.obj);
        console.log('render messages:', this.state.messages);
        console.log('props in Chat:', this.props);
        // const map = `https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393`
        let {messages} = this.state
        let msgs = messages.map((message, i) => {

            return (
            <div key={i}>
                { message.username === this.props.user.user.username ? 
                    <div className="each-user-message">
                        <img className="message-profile-pic" alt="" src={message.profile_pic || `https://robohash.org/${message.username}`} />
                        <div className="user-chatroom-message" >

                            <div className="sender-info">
                                <p className="chatroom-from">from: {message.username || message.from}</p>
                                {/* <p className="chatroom-at">at: {message.created_at}</p> */}
                            </div>
                            <div className="chatroom-content">
                                <p className="chatroom-text" style={{color: '#fff'}}>{message.message || message.text}</p>
                                {message.url ? <a className="chatroom-link" rel="noopener noreferrer" target="_blank" href={message.url} >{message.url}</a> : null}
                            </div>

                        </div>
                                <p className="chatroom-at">{message.created_at || message.createdAt}</p>
                    </div> 
                    : 
                    <div className="each-seller-message">
                        <img className="message-profile-pic" alt="" src={message.profile_pic || `https://robohash.org/${message.username}`} />
                        <div className="chatroom-message" >

                            <div className="sender-info">
                                <p className="chatroom-from">from: {message.username || message.from}</p>
                                {/* <p className="chatroom-at">at: {message.created_at}</p> */}
                            </div>
                            <div className="chatroom-content">
                                <p className="chatroom-text" style={{color: '#fff'}}>{message.message || message.text}</p>
                                {message.url ? <a className="chatroom-link" rel="noopener noreferrer" target="_blank" href={message.url} >{message.url}</a> : null}
                            </div>

                        </div>
                                <p className="chatroom-at-seller">{message.created_at || message.createdAt}</p>
                    </div>}
            </div>
            )
        }) 

        return(
            <div className="ChatRoom-container" >
            <Link to="/profile"><div className="edible-close"><Close /></div></Link>
            <img alt="" className="private-chat-background" src={this.state.obj.room_img} />
            <header>
                <h2>Chat Room</h2>
                <button className="chat-location-btn" onClick={this.findLocation}>Send Location</button>
            </header>
                <section style={{overflow: 'auto'}}>
                    {messages && messages.length ? ( <div>{msgs}</div> ): null}
                </section>
                <br/>
                <form onSubmit={e => this.sendMessage(e)} className="chat-form">
                    
                    <input type="text" name="chatInput" className="chat-input" placeholder="Compose Message..." />
                    <button className="chat-submit" >Send Message</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(ChatRoom)