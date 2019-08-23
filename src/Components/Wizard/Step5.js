import "./Wizard.css"
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {saveEdible, updateStep3, saveBoard} from '../../ducks/edibleReducer'
// import { UPDATE_EDIBLE_IMAGE, UPDATE_EDIBLE_NAME, UPDATE_DESCRIPTION } from '../../ducks/edibleReducer'
// const link = `https://www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg`

class Step5 extends Component{
    constructor(props){
        super(props)
        console.log('props:', props, 'vs this.props:', this.props);
        this.state = {
            edibleName: props.edibles.edibleName,
            description: props.edibles.description,
            price: props.edibles.price,
            sellerId: props.edibles.sellerId
        }
    }

    componentDidMount() {
        let {id} = this.props.user.user
        console.log('props in step5:', this.props);
        this.setState({
            sellerId: id,
        })
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

    addEdible = () => {
        // e.preventDefault()
        const {edibleImage, currentBoardId} = this.props.edibles
        const {id: sellerId} = this.props.user.user
        const {edibleName, description, price} = this.state
        let obj = {sellerId, edibleImage, edibleName, description, price, currentBoardId}
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
                        <textarea rows="4" cols="28" type="text" name="description" defaultValue={description} onChange={e => this.handleChange(e)} placeholder="Description" />
                        <input type="integer" name="price" defaultValue={price} onChange={e => this.handleChange(e)} placeholder="Edible Price" />
                        <div className="step2-form-buttons" >
                            <Link to="/wizard/step4" ><button className="wizard-button" onClick={this.saveChanges} >Go Back</button></Link>
                            <Link to="/seller/profile"><button className="wizard-button"  onClick={this.addEdible}>Done</button></Link>
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

export default connect(mapStateToProps, {saveEdible, updateStep3, saveBoard})(Step5)