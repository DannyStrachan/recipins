import React, {Component} from 'react'
import socket from '../../sockets'

export default class ChatConvos extends Component{

    componentDidMount() {
        socket.emit('leave all')
        socket.emit('join room', {roomId: "39:32:Yum"})
        this.props.history.push('/chatroom')
    }

    render(){
        return(
            <div className="ChatConvos-container" >hello</div>
        )
    }
}