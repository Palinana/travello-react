import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';

import Navbar from './components/layout/Navbar';
// import Dashboard from './components/layout/Dashboard';
import HotelDetails from './components/layout/HotelDetails';

import Sidebar from './components/layout/Sidebar';
import Hotels from './components/layout/Hotels';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Navbar/>
                        <div className="content">
                            <Sidebar/>
                            <main class="view">
                                <Switch>
                                    <Route exact path="/" component={Hotels}/>
                                    <Route exact path="/hotels/:id" component={HotelDetails}/>/}

                                    {/* <Route path="/client/add" component={UserIsAuthenticated(AddClient)}/>
                                    <Route path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}/>
                                    <Route path="/client/:id" component={UserIsAuthenticated(ClientDetails)}/> */}
                                </Switch>
                            </main>
                        </div>  
                    </div>
                </Router>
          </Provider>
        );
    }
}

export default App;
