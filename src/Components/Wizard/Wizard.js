import "./Wizard.css"
import React, {Component} from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import {Close} from 'grommet-icons'
import {connect} from 'react-redux'
import { cancelChanges } from '../../ducks/edibleReducer'
import { Link, HashRouter, Route, Switch } from 'react-router-dom'

class Wizard extends Component{

    cancelChanges = () => {
        this.props.cancelChanges()
    }

    render() {
        return (
            <HashRouter>
                <div className="Wizard-container" >
                    <div className="Wizard-header" >
                        <Link className="wizard-close" to="/seller/profile" ><Close onClick={this.cancelChanges} /></Link>
                    </div>
                    <Switch>
                        <Route path="/wizard/step1" component={Step1} />
                        <Route path="/wizard/step2" component={Step2} />
                        <Route path="/wizard/step3" component={Step3} />
                        <Route path="/wizard/step4" component={Step4} />
                        <Route path="/wizard/step5" component={Step5} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateToProps, {cancelChanges})(Wizard)