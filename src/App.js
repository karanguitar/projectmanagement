import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dasboard from './components/dashboard/Dashboard'
import ProjectDetail from './components/projects/ProjectDetail'
import SignIn from './components/auth/SignIn'
import Register from './components/auth/Register'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" component={Dasboard} exact />
            <Route path="/create" component={CreateProject} />
            <Route path="/project/:id" component={ProjectDetail} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
