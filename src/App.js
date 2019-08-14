import React from 'react';
// import Auth from './Components/Auth/Auth'
// import CreateBoard from './Components/CreateBoard/CreateBoard'
// import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import './App.css';

function App(props) {
  console.log("props in app", props);
  return (
    <div className="App">
      {/* <Auth />
      <CreateBoard />
      <Nav /> */}
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
