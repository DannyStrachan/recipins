import './Header.css'
import React, {Component} from 'react'

export default class Header extends Component{

    render(){
        // if (this.props.location.pathname.indexOf('/share') > -1 ) return null
        return (
            <div className="Header">
                <div className="icon">Header</div>
            </div>
        )
    }
}

