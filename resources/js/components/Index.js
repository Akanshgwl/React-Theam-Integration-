import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layout/Header';
import Nav from './layout/Nav';
import User from './user/User';
import Edituser from './user/Edituser';
import Dashboard from './Dashboard';
import ReactDOM from 'react-dom';
 
export default class Index extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Header /> 
                        <Nav />
                        <Switch>
                        <Route exact path='/' component={Dashboard} />
                        <Route path='/user' component={User} />
                        <Route path='/:id' component={Edituser} />
                        </Switch> 
                    </div>
                </BrowserRouter> 
                );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
