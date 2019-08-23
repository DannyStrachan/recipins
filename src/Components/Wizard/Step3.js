import "./Wizard.css"
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {saveEdible, updateStep3, saveBoard} from '../../ducks/edibleReducer'
// import { UPDATE_EDIBLE_IMAGE, UPDATE_EDIBLE_NAME, UPDATE_DESCRIPTION } from '../../ducks/edibleReducer'
// const link = `https://www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg`

class Step3 extends Component{
    constructor(props){
        super(props)
        console.log('props:', props, 'vs this.props:', this.props);
        this.state = {
            edibleName: props.edibles.edibleName,
            description: props.edibles.description,
            price: props.edibles.price
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        const {name} = e.target
        const {value} = e.target
        this.setState({
            [name]: value
        })
    }

    saveChanges = () => {
        this.props.updateStep3(this.state)
    }

    addEdibleWithBoard = () => {
        // e.preventDefault()
        const {boardImage, boardName, sellerId, edibleImage} = this.props.edibles
        const {edibleName, description, price} = this.state
        let obj = {boardImage, boardName, sellerId, edibleImage, edibleName, description, price}
        this.props.saveEdible(obj)
    }

    render(){
        let { edibleName, description, price } = this.state
        console.log('step2 props', this.props);
        return(
            <div className="Step2" >
                <form className="form-3">
                    <div className="wizard-input" >
                        <input type="text" name="edibleName" defaultValue={edibleName} onChange={e => this.handleChange(e)} placeholder="Edible Name" />
                        <input type="text" name="description" defaultValue={description} onChange={e => this.handleChange(e)} placeholder="Description" />
                        <input type="integer" name="price" defaultValue={price} onChange={e => this.handleChange(e)} placeholder="Edible Price" />
                        <div className="step2-form-buttons" >
                            <Link to="/wizard/step2" ><button className="wizard-button" onClick={this.saveChanges} >Go Back</button></Link>
                            <Link to="/seller/profile"><button className="wizard-button"  onClick={this.addEdibleWithBoard}>Done</button></Link>
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

export default connect(mapStateToProps, {saveEdible, updateStep3, saveBoard})(Step3)