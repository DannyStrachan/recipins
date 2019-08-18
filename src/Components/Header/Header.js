import './Header.css'
import React, {Component} from 'react'
import Nav from '../Nav/Nav'
import {connect} from 'react-redux'
import { Home, FormSearch } from 'grommet-icons';
import { getRecipins } from '../../ducks/recipinReducer'
import {Link} from 'react-router-dom'


class Header extends Component{
    
    getPins = async (e) => {
        const recipeName = e.target.elements.recipeName.value
        // this.props.signup()
        // const recipeName = e.target.elements.recipeName.value
        e.preventDefault()
        this.props.getRecipins(recipeName)
        
    }

    render(){
        // if (this.props.location.pathname.indexOf('/share') > -1 ) return null

        var buttonStyle = {
            height: '44px',
            position: 'relative',
            top: '-9px'
        }

        var formStyle = {
            display: 'flex',
            width: '84%',
            height: '33px'
        }
        
        return (
            <div className="Header">
                <Link to="/dashboard" className="icon"><Home color='whitesmoke' size='33px' /></Link>
                <form style={formStyle} onSubmit={e => this.getPins(e)} >
                    <input type="text" name="recipeName" className="search" placeholder="Search" />
                    <button className="button-search" style={buttonStyle} ><FormSearch color='whitesmoke' size='large' /></button>
                </form>
                    <Nav />

                <div className="hidden-nav"></div>
            </div>
        )
    }
}

export default connect( null, {getRecipins} )( Header )