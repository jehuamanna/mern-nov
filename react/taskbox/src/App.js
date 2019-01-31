import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Link} from 'react-router-dom'
import ProjectList from './components/projects/list';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Taskbox</h2>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>


          <Route path="/" component={Dashboard} exact />
          <Route path="/projects" component={ProjectList} />
        </div>
      </BrowserRouter>
    )
  }  
  
}

export default App;
