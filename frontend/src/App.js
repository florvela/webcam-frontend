import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Contact } from './Contact';
import { WebcamCapture } from './WebcamCapture';
import './homeStyles.css'
//import Webcam from "react-webcam";
//<Route exact path="/webcam" component={Webcam} />

function App() {
  return (
  <WebcamCapture/>
//    <React.Fragment>
//        <Router>
//            <Switch>
//                <Route exact path="/" component={Home} />
//                <Route exact path="/about" component={About} />
//                <Route exact path="/contact" component={Contact} />
//                <Route exact path="/webcam" component={WebcamCapture} />
//                <Route component={NoMatch} />
//            </Switch>
//        </Router>
//    </React.Fragment>
  );
}

export default App;
