import React, { Component } from 'react';
import {Switch, Router, Route, Link } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Store from '../pages/Store'

class MainWindow extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/store" component={Store} />
            </Switch>
        );
    }
}

export default MainWindow;