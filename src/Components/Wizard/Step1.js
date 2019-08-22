import "./Wizard.css"
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {saveBoard, updateStep1} from '../../ducks/edibleReducer'
// import { UPDATE_BOARD_NAME, UPDATE_BOARD_IMAGE, UPDATE_SELLER_ID } from '../../ducks/edibleReducer'
// import store from '../../ducks/store'
import {connect} from 'react-redux'
// const link = `https://assets3.thrillist.com/v1/image/2797371/size/tmg-article_default_mobile.jpg`

class Step1 extends Component{
    constructor(props) {
        // let reduxState = store.getState()
        super(props)
        this.state = {
            boardImage: props.boardImage,
            boardName: props.boardName,
            sellerId: props.sellerId
        }

        // super(props)
        // this.state = {
        //     boardImage: '',
        //     boardName: '',
        //     sellerId: ''
        // }
    }

    componentDidMount() {
        let {id} = this.props.user.user
        console.log('props in step1:', this.props);
        // store.subscribe(() => {
        //   store.getState();
        // });
        this.setState({
            sellerId: id
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
        console.log('hit saveChanges:', this.props);
        this.props.updateStep1(this.state)
    }

    addBoard = () => {
        console.log('hit addBoard');
        this.props.saveBoard(this.state)
    }

    render(){
        console.log('props in step1:', this.props.user.user);
        let { boardName, boardImage } = this.state
        return(
            <div className="Step1" >
                <form className="form-1">
                    <img className="wizard-img" alt="" src={this.state.boardImage}/>
                    <div className="wizard-input" >
                        <input type="text" name="boardImage" defaultValue={boardImage} onChange={e => this.handleChange(e)} placeholder="Image URL Here" />
                        <input type="text" name="boardName" defaultValue={boardName} onChange={e => this.handleChange(e)} placeholder="Board Name Here" />
                        <div className="step1-form-buttons" >
                            <Link to="/seller/profile" ><button className="wizard-button" onClick={this.addBoard} >Save</button></Link>
                            <Link to="/wizard/step2" ><button className="wizard-button" onClick={this.saveChanges} >Add Edible</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {saveBoard, updateStep1})(Step1)