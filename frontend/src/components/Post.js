import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/Delete_Icon.png';
import Constants from './Constants';

class Post extends Component {
    state = {
        showDetailViewButton: false,
    };

    componentDidMount() {
        this.props.showDetailViewButton === true ? this.setState({showDetailViewButton: true}) : this.setState({showDetailViewButton: false});
    }

    handleEditButtonClick() {

    }

    handleDeleteButtonClick(id) {
        var url = `http://localhost:3001/posts/${id}`;
        console.log(url);
        // NOTE: post is being deleted, however the post view is not updating
        fetch(`${url}`, {headers: Constants.headers, method: Constants.methods.DELETE}).then((res) => res.json() ).then((data) => console.log(url + ` post has been deleted.`));
    }

    handleAddCommentButtonClick() {

    }

    handlePostDetailViewButtonClick() {
        console.log('handlePostDetailViewButtonClick');
    }

    render() {
        const {post, deletePost} = this.props;
        return (
            <div key={post.id} className="card">
                <div className="container">
                    <div className="post-timestamp" id="timestamp">{post.timestamp}</div>
                    <div className="post-title" id="title">{post.title} <i>(id: {post.id}</i>)</div>
                    <div className="post-body" id="body">Body: {post.body}</div>
                    <div className="post-author" id="author">Author: {post.author}</div>
                    <div className="post-category" id="category">Category: {post.category}</div>
                    <div className="post-vote-score" id="category">{post.voteScore} <button type="button" value="+1">+1</button> <button type="button" value="-1">-1</button></div>
                    <div className="post-comment-count" id="commentCount"># of comments: {post.commentCount}</div>
                    <div>
                        <Link className="btn" role="button" to={`/postDetailView/${post.id}`} onClick={this.handlePostDetailViewButtonClick()} id="postDetailViewButton">Detail View</Link>
                        <Link className="btn" role="button" to={`/createEditView`} onClick={this.handleAddCommentButtonClick()} id="addCommentButton">Add Comment</Link>
                        <Link className="btn" role="button" to={`/createEditView`} onClick={this.handleEditButtonClick()} id="editPostButton">Edit Post</Link>
                        <Link className="btn" role="button" to="/" onClick={(event) => deletePost(post.id)} id="deleteButton"><img src={DeleteIcon} alt="delete icon" width="25px" height="25px" /></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Post;