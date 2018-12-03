import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';

import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Navbar/>
                        <div className="app-content">
                            {/* <Switch> */}
                                <Route exact path="/" component={Dashboard}/>
                                {/* <Route path="/client/add" component={UserIsAuthenticated(AddClient)}/>
                                <Route path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}/>
                                <Route path="/client/:id" component={UserIsAuthenticated(ClientDetails)}/> */}
                            {/* </Switch> */}
                        </div>  
                    </div>
                </Router>
          </Provider>
        );
    }
}

export default App;
