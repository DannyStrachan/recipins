import "./Wizard.css"
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {updateStep2} from '../../ducks/edibleReducer'
// const link = `https://www.drdavidludwig.com/wp-content/uploads/2017/01/1-RIS_6IbCLYv1X3bzYW1lmA.jpeg`

class Step4 extends Component{
    constructor(props){
        super(props)
        console.log('props:', props, 'vs this.props:', this.props);
        this.state = {
            edibleImage: props.edibles.edibleImage
        }
    }

    componentDidMount() {
        console.log('componentDMount props in step 4:', this.props);
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
        this.props.updateStep2(this.state)
    }

    render(){
        let { edibleImage} = this.state
        console.log('step2 props', this.props);
        return(
            <div className="Step2" >
                <form className="form-2">
                    <h1>Create an Edible</h1>
                    <img className="wizard-img" alt="" src={edibleImage} />
                    <div className="wizard-input" >
                        <input type="text" name="edibleImage" defaultValue={edibleImage} onChange={e => this.handleChange(e)} placeholder="Edible Image" />
                        <div className="step4-form-buttons" >
                            {/* <Link to="/wizard/step1" ><button className="wizard-button" >Add Board</button></Link> */}
                            <Link to="/wizard/step5" ><button className="wizard-button" onClick={this.saveChanges} >Next</button></Link>
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

export default connect(mapStateToProps, {updateStep2})(Step4)