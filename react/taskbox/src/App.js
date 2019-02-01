import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Link} from 'react-router-dom'
import ProjectList from './components/projects/list';


import UserList from "./components/users/list"
import UserAdd from './components/users/add'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Taskbox</h2>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="users">Users</Link></li>
          </ul>


          {/* <Route path="/" component={Dashboard} exact /> */}
          <Route path="/projects" component={ProjectList} />

          <Route path="/users" component={UserList} />
        </div>
      </BrowserRouter>
    )
  }  
  
}

export default App;
