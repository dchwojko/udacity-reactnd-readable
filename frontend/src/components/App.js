import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Post from './Post';
import PostsView from './PostsView';
import RootView from './RootView';
import CategoryView from './CategoryView';
import PostDetailView from './PostDetailView';
import CreateEditView from './CreateEditView';
import { Route, Link } from 'react-router-dom';
import Sandbox from './Sandbox';

const headers = {
  'Authorization': 'witcher_mo',
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

class App extends Component {
  state = {
    note: []
  };


  myTest = () => {
    fetch(`http://localhost:3001/categories`, { headers: headers })
        .then((res) => res.json() )
        .then(
          (data) => this.setState({note: data.categories})
        );
  }

  componentDidMount() {
    fetch(`http://localhost:3001/categories`, { headers: headers })
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
        <Route path="/sandbox" render={ () => <Sandbox />}/>
        <Route exact path="/" render={ () => <PostsView /> }/>
        <Route path="/createEditView" render={ () => <CreateEditView />}/>
        <Route path="/postDetailView" render={ () => <PostDetailView />}/>
        <Route path="/categoryView/:categoryName" render={ () => <CategoryView />}/>
      </div>
    );
  }
}
//http://localhost:3000/createEditView
export default App;

/*
        <Post categories={this.state.note}/>
        <RootView />
        <CategoryView />
        <PostDetailView />
        <CreateEditView />
        <PostsView />

*/