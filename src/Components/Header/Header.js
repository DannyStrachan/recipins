import './Header.css'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import { getRecipins } from '../../ducks/recipinReducer'
import {Link} from 'react-router-dom'


class Header extends Component{
    
    getPins = async (e) => {
        // this.props.signup()
        // const recipeName = e.target.elements.recipeName.value
        e.preventDefault()
        this.props.getRecipins()
        
    }

    render(){
        // if (this.props.location.pathname.indexOf('/share') > -1 ) return null

        var buttonStyle = {
            background: 'whitesmoke',
            padding: '3px',
            color: 'red',
            fontSize: '18px',
            fontWeight:'bold',
            borderRadius: '8px'
        }

        var formStyle = {
            display: 'flex',
            width: '69%',
            height: '33px'
        }
        
        return (
            <div className="Header">
                <Link to="/dashboard" className="icon">Home</Link>
                <form style={formStyle} onSubmit={e => this.getPins(e)} >
                    <input type="text" name="recipeName" className="search" placeholder="Search" />
                    <button className="button-search" style={buttonStyle} >Search</button>
                </form>
                    <div className="nav" >NAV</div>

                <div className="hidden-nav"></div>
            </div>
        )
    }
}

export default connect( null, {getRecipins} )( Header )