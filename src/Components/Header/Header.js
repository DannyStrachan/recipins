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
        document.getElementsByClassName('search')[0].value=null
    }

    atDashboard() {
        // if (window.location.hash === '#dashboard') {
        //     return true
        // } else {return false}
        console.log('hello')
    }

    render(){
        // if (this.props.location.pathname) {
            console.log('window:', window.location.hash);
            // console.log('path:', this.props.history.location.pathname );

        // }

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

        // var divStyle = {
        //     display: 'none'
        // }

        const isTrue = this.atDashboard()
        console.log('isTrue:', isTrue);
        
        return (
            <div className="Header">
                <Link to="/dashboard" className="icon"><Home color='whitesmoke' size='33px' /></Link>
                <form style={formStyle} onSubmit={e => this.getPins(e)} >
                    <input type="text" name="recipeName" onClick={this.atDashboard} className="search" placeholder="Search" />
                    <button className="button-search" style={buttonStyle} ><FormSearch color='whitesmoke' size='large' /></button>
                </form>
                <Nav />
                {/* {
                    window.location.hash !== '#/dashboard' ?
                <div style={divStyle}></div> :
                    
                <div className="header-filter-buttons" >
                    <div className="toggle-switch" ><Article /></div>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <div className="toggle-switch" ><Restaurant /></div>
                </div> 
                } */}
            </div>
        )
    }
}

export default connect( null, {getRecipins} )( Header )