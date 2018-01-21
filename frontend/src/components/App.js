import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import PostsView from './PostsView';
import CategoryView from './CategoryView';
import PostDetailView from './PostDetailView';
import CreateEditView from './CreateEditView';
import { Route } from 'react-router-dom';
import Sandbox from './Sandbox';
import Constants from './Constants';

class App extends Component {
  state = {
    note: []
  };

  componentDidMount() {
    fetch(`http://localhost:3001/categories`, { headers: Constants.headers })
        .then((res) => res.json() )
        .then(
          (data) => this.setState({note: data.categories})
        );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MyReads App</h1>
        </header>
        <Route path="/sandbox/:id" component={Sandbox}/>
        <Route exact path="/" component={PostsView}/>
        <Route path="/createEditView" component={CreateEditView}/>
        <Route path="/postDetailView/:postId" component={PostDetailView}/>
        <Route path="/categoryView/:categoryName" component={CategoryView}/>
      </div>
    );
  }
}

export default App;