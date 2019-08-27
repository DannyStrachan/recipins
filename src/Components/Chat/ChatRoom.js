import "./ChatRoom.css"
import socket from '../../sockets'
import React, {Component} from 'react';
export default class ChatRoom extends Component{
    state = {
        text: '',
        messages: ['hello'],
        roomId: '',
        obj: {}
    }

    componentDidMount() {
        console.log('state set');
        socket.on('room joined', async messages => {
            console.log('room Id coming back:', messages);
          await this.setState({
            obj: messages[0],
            roomId: messages[0].room_id
          })
          console.log('state after return:', this.state.obj);
        })
        socket.on('message sent', data => {
            console.log('sent message received: ', data.message);
            let messagesArray = [...this.state.messages]
            messagesArray.push(data.message)
            this.setState({
                text: data.message,
                messages: messagesArray
            })
        });
        
    }

    // componentWillUnmount() {
    //     socket.emit('disconnect', this.state.roomId)
    // }

    // componentDidUpdate() {
    //     console.log('updated', data.message);
    //     socket.on('message sent', data => {
    //     let messagesArray = [...this.state.messages]
    //     messagesArray.push(data.message)
    //     this.setState({
    //         text: data.message,
    //         messages: messagesArray
    //     })
    //     });
    // }

    sendMessage = (e) => {
        e.preventDefault()
        const inputValue = e.target.elements.chatInput.value
        console.log('value to send:', inputValue);
        // console.log('socket', socket.emit);
        socket.emit('send message', {
            message: inputValue,
            roomId: this.state.roomId
        })

            // console.log('timing:');
            // socket.on('message sent', data => {
            //     console.log('sent message received: ', data.message);
            //     let messagesArray = this.state.messages
            //     messagesArray.push(data.message)
            //     this.setState({
            //         text: data.message,
            //         messages: messagesArray
            //     })
            // });
            document.getElementsByClassName('chat-input')[0].value=null
    }

    render() {
        console.log('state obj:', this.state.obj);
        console.log('render messages:', this.state.messages);
        let {messages, text} = this.state
        let msgs = messages.map((message, i) => {
            console.log('mapping time');
            return (
                <div key={i}>
                <p style={{color: '#fff'}}>{message}</p>
                </div>
            )
        })

        // console.log('render timing:');
        //     socket.on('message sent', data => {
        //         console.log('sent message received: ', data.message);
        //         let messagesArray = this.state.messages
        //         messagesArray.push(data.message)
        //         this.setState({
        //             text: data.message,
        //             messages: messagesArray
        //         })
        //     });

        return(
            <div className="ChatRoom-container" >
                <h1>Chat Room</h1>
                <section style={{overflow: 'auto'}}>
                {messages && messages.length ? (
                    <div>{msgs}</div>
                    // let msgs = messages.map((message, i) => {
                    //     return (
                    //         <div key={i}>
                    //         <p style={{color: '#fff'}}>{message}</p>
                    //         </div>
                    //     )
                    // })
                ): null}
                </section>
                <h1 style={{color: '#369'}}>{messages.length ? <div>{text}</div> : null }</h1>
                {/* <img alt="" className="private-chat-background" src={this.state.obj.room_img} /> */}
                <br/>
                <form onSubmit={e => this.sendMessage(e)} className="chat-form">
                    
                    <input type="text" name="chatInput" className="chat-input" placeholder="Compose Message..." />
                    <button className="chat-submit" >Submit</button>
                </form>
            </div>
        )
    }
}