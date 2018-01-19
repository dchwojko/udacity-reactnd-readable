import React, { Component } from 'react';
import '../css/PostsView.css';
import { Link } from 'react-router-dom';
import CategoriesBar from './CategoriesBar';
import Post from './Post';
import Constants from './Constants';

class PostsView extends Component { 

    state = {
        posts: [],
        sortOrder: '',
        sortBy: '',
    };

    componentDidMount() {
        this.fetchPosts();
    }


    handleCreateNewPostButtonClick() {

    }

    deletePost = (id) => {
        // TO DO: delete post by id    
        var url = `http://localhost:3001/posts/${id}`;
        console.log(url);
        fetch(`${url}`, {headers: Constants.headers, method: Constants.methods.DELETE}).then((res) => res.json() ).then((data) => console.log(`${url} post has been deleted.`)).then(() => {this.fetchPosts();});
    }
    
    fetchPosts() {
        fetch(`http://localhost:3001/posts`, {headers: Constants.headers}).then((res) => res.json() ).then((data) => this.updatePosts(data));
    }

    updatePosts(data) {
        if (this.state.sortBy === "Data") {
            if (this.state.sortOrder === "Ascending") {
                // TO DO
            } else {
                // TO DO
            }
        } else {
            if (this.state.sortOrder === "Ascending") {
                // TO DO
            } else {
                // TO DO
            }
        }
        this.setState({posts: data});
    }

    isDeleted(flag) {
        return flag ? "TRUE" : "FALSE";
    }

    buildPost = (post) => {
        return (
            <Post post={post} key={post.id} deletePost={this.deletePost}/>
        );
    }

    render() {
        return (
            <div>
                <p><Link to="/sandbox" className="btn" role="button">sandbox</Link></p>
                <CategoriesBar />
                <div><Link className="btn" role="button" to="/createEditView" onClick={this.handleCreateNewPostButtonClick()}>Create New Post</Link></div>
                <div>Sort By: <select><option value="Date">Date</option><option value="voteScore">Vote Score</option></select> Sort order: <select><option value="Ascending">Ascending</option><option value="Descending">Descending</option><option value="None">None</option></select></div>
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