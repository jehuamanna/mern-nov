import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Link} from 'react-router-dom'
import ProjectList from './components/projects/list';
import ProjectAdd from './components/projects/add'
import Dashboard from './components/dashboard/index'
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
            <li><Link to="/users">Users</Link></li>
          </ul>


          <Route path="/" component={Dashboard} exact />
          <Route path="/projects" component={ProjectList} exact/>

          <Route path="/users" component={UserList} exact/>
          <Route path="/projects/new" component={ProjectAdd} />
          {/* <Route path="/users:id" component={}/> */}
        </div>
      </BrowserRouter>
    )
  }  
  
}

export default App;
