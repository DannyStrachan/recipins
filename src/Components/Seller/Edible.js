import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getEdible} from '../../ducks/edibleReducer'

class Edible extends Component{

componentDidMount() {
    console.log('id to search:', this.props.match.params.edibleId);
    const {edibleId: id} = this.props.match.params
    this.props.getEdible(id)
}





    render() {
         console.log('propsssss:', this.props);
        return (
            <div className="Edible-container" >
                <div>Hello from Edible</div>
                {/* <img alt="" src={this.props.}></img> */}
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps, {getEdible})(Edible)