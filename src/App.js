import React from 'react';
import Header from './Components/Header/Header'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import './App.css';

function App(props) {
  console.log("props in app", props);
  return (
    <div className="App">
      {props.location.pathname === '/' ||
      props.location.pathname === '/save' ||
      props.location.pathname === '/share' ||
      props.location.pathname === '/recipe-card' ?
      null :
      <Header />
      }
      {routes}
    </div>
  );
}

export default withRouter(App)
