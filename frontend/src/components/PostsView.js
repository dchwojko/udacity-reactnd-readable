import React, { Component } from 'react';
import '../css/PostsView.css';
import { Link } from 'react-router-dom';
import CategoriesBar from './CategoriesBar';
import Post from './Post';
import Constants from './Constants';

class PostsView extends Component { 

    state = {
        posts: [],
        sortOrder: 'ascending',
        sortBy: 'date',
    };

    componentDidMount() {
        this.fetchPosts();
    }

    deletePost = (id) => {
        var url = `http://localhost:3001/posts/${id}`;
        console.log(url);
        fetch(`${url}`, {headers: Constants.headers, method: Constants.methods.DELETE}).then((res) => res.json() ).then((data) => console.log(`${url} post has been deleted.`)).then(() => {this.fetchPosts();});
    }
    
    fetchPosts() {
        fetch(`http://localhost:3001/posts`, {headers: Constants.headers}).then((res) => res.json() ).then((data) => this.updatePosts(data));
    }

    async updatePosts(data) {
        await this.setState({posts: data});
        this.sortPosts();
    }

    sortPosts() {        
        switch (this.state.sortBy) {
            case "date":
                if (this.state.sortOrder === "ascending") {
                    this.setState({posts: this.state.posts.sort((a,b) => a.timestamp > b.timestamp)});
                } else {
                    this.setState({posts: this.state.posts.sort((a,b) => a.timestamp < b.timestamp)});
                }
                break;
            case "voteScore":
                if (this.state.sortOrder === "ascending") {
                    this.setState({posts: this.state.posts.sort((a,b) => a.voteScore > b.voteScore)});
                } else {
                    this.setState({posts: this.state.posts.sort((a,b) => a.voteScore < b.voteScore)});
                }
                break;
            default:
                console.log('unknown sort by value');
                break;
        }
    }

    buildPost = (post) => {
        return (
            <Post post={post} key={post.id} deletePost={this.deletePost} showDetailViewButton="true"/>
        );
    }

    async handleSortByChange(value) {
        console.log('handleSortByChange: ' + value);
        await this.setState({sortBy: value});
        this.sortPosts();
    }

    async handleSortOrderChange(value) {
        console.log('handleSortOrderChange: ' + value);
        await this.setState({sortOrder: value});
        this.sortPosts();
    }

    render() {
        return (
            <div>
                <Link className="btn" role="button" to="/sandbox/1">sandbox</Link>
                <div><Link className="btn" role="button" to="/createEditView" >Create New Post</Link></div>
                <CategoriesBar />
                <div>Sort By: <select onChange={(event) => {this.handleSortByChange(event.target.value)}}><option value="date">Date</option><option value="voteScore">Vote Score</option></select> Sort Order: <select onChange={(event) => this.handleSortOrderChange(event.target.value)}><option value="ascending">Ascending</option><option value="descending">Descending</option></select></div>
                <div className="posts-lists">
                    {this.state.posts.map((post) => { return this.buildPost(post)})}
                </div>
            </div>
        )
    }
}
export default PostsView;


/*
     "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
*/