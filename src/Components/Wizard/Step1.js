import "./Step1.css"
import React, {Component} from 'react'
const link = `https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg`

export default class Step1 extends Component{



    render(){
        return(
            <div className="Step1" >
                <form className="form-1">
                    <img className="wizard-img" alt="" src={link}/>
                    <div className="wizard-input" >
                        <input type="text" placeholder="Image URL Here" />
                        <input type="text" placeholder="Board Name Here" />
                        <button className="wizard-button">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}