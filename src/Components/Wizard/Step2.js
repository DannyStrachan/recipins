import "./Wizard.css"
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {saveEdible, updateStep2} from '../../ducks/edibleReducer'
// import { UPDATE_EDIBLE_IMAGE, UPDATE_EDIBLE_NAME, UPDATE_DESCRIPTION } from '../../ducks/edibleReducer'
// const link = `https://www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg`

class Step2 extends Component{
    constructor(props){
        super(props)
        this.state = {
            edibleImage: props.edibleImage,
            edibleName: props.edibleName,
            description: props.description
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        const {name} = e.target
        const {value} = e.target
        this.setState({
            [name]: value
        })
        // console.log('state in Step:', this.state.edibleImage);
    }

    saveChanges = () => {
        this.props.updateStep2(this.state)
    }

    tryTest = () => {
        console.log('test.......');
    }

    addEdible = () => {
        console.log('adding edible...', this.props);
        // this.props.saveEdible(this.state)
    }

    render(){
        let { edibleImage, edibleName, description } = this.state
        return(
            <div className="Step2" >
                <form className="form-2">
                    <img className="wizard-img" alt="" src={this.state.edibleImage} />
                    <div className="wizard-input" >
                        <input type="text" name="edibleImage" defaultValue={edibleImage} onChange={e => this.handleChange(e)} placeholder="Edible Image" />
                        <input type="text" name="edibleName" defaultValue={edibleName} onChange={e => this.handleChange(e)} placeholder="Edible Name" />
                        <input type="text" name="description" defaultValue={description} onChange={e => this.handleChange(e)} placeholder="Description" />
                        <div className="step2-form-buttons" >
                            <Link to="/wizard/step1" ><button className="wizard-button" onClick={this.saveChanges} >Go Back</button></Link>
                            {/* <Link to="/seller/profile" ></Link> */}
                            <button className="wizard-button" onChange={this.addEdible} >Done</button>
                            <button className="wizard-button" onChange={this.tryTest} >Test</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps, {saveEdible, updateStep2})(Step2)