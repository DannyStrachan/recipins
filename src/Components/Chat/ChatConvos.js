import "./ChatConvos.css"
import React, {Component} from 'react'
import {connect} from 'react-redux'
import socket from '../../sockets'

class ChatConvos extends Component{

    state = {
        foundRooms: []
    }

    componentDidMount() {
        socket.emit('leave all')
         let {id} = this.props.user.user
        socket.emit('get rooms', id)
        socket.on('found rooms', async foundRooms => {
            await this.setState({
                foundRooms
            })
        })
    }

    goToRoom = async (e) => {
        e.preventDefault()
        let roomId = e.target.name
        console.log('going to room', roomId);
        await socket.emit('join room', {roomId})
        window.location.href = `http://localhost:3000/#/chatroom/${roomId}`
        // this.props.history.push(`/chatroom/${e.target.name}`)
    }

    render(){
        console.log('props:', this.props);
        console.log('state:', this.state.foundRooms);
        let rooms = this.state.foundRooms.map((room, i) => {
            return (
            <div className="Room-container" onClick={e => this.goToRoom(e)} key={i}>
                <img className="room-image" name={room.room_id} alt="" src={room.room_img} />
            </div>
            )
        })
        return(
            <div className="ChatConvos-container" >
                {rooms}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps)(ChatConvos)