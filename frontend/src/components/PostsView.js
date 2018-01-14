import React, { Component } from 'react';
import '../css/PostsView.css';
import { Link } from 'react-router-dom';
import CategoryView from './CategoryView';
import CategoriesBar from './CategoriesBar';
import DeleteIcon from '../assets/Delete_Icon.png';

const headers = {
    'Authorization': 'witcher_mo',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

class PostsView extends Component { 

    state = {
        posts: [],
        sortOrder: '',
        sortBy: '',
    };

    componentDidMount() {
        fetch(`http://localhost:3001/posts`, {headers: headers}).then((res) => res.json() ).then((data) => this.setState({posts: data}))
    }


    handleEditButtonClick() {

    }

    handleDeleteButtonClick() {
        // TODO: set post.deleted flag to true
    }

    handleAddCommentButtonClick() {

    }

    buildPost = (post) => {
        return (
            <div key={post.id} className="card">
                <div className="container">
                    <div className="post-title"><p>Title: {post.title} (id: {post.id})</p></div>
                    <div className="post-body">Body: {post.body}</div>
                    <div className="post-author">Author: {post.author}</div>
                    <div className="post-category">Category: {post.category}</div>
                    <div className="post-vote-score">{post.voteScore} <button type="button" value="+1">+1</button> <button type="button" value="-1">-1</button></div>
                    <div className="post-comment-count" hidden="true">TODO: Number of Comments</div>
                    <div><Link className="btn" role="button" to="/createEditView" onClick={this.handleAddCommentButtonClick()}>Add Comment</Link></div>
                    <div>
                        <Link className="btn" role="button" to="/createEditView" onClick={this.handleEditButtonClick()}>Edit Post</Link>
                        <Link className="btn" role="button" to="/" onClick={this.handleDeleteButtonClick()}><img src={DeleteIcon} alt="delete icon" width="25px" height="25px" /></Link>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <p>
          <Link to="/sandbox" className="btn" role="button">sandbox</Link>
        </p>
                <CategoriesBar />
                <div><Link className="btn" role="button" to="/createEditView" onClick={this.handleEditButtonClick()}>Create New Post</Link></div>
                
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