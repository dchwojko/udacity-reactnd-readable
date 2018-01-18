import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/Delete_Icon.png';

const headers = {
    'Authorization': 'witcher_mo',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

class Post extends Component {

    handleEditButtonClick() {

    }

    async handleDeleteButtonClick(id) {
        var url = `http://localhost:3001/posts/${id}`;
        console.log(url);
        // NOTE: post is being deleted, however the post view is not updating
        await fetch(`${url}`, {headers: headers, method: 'DELETE'}).then((res) => res.json() ).then((data) => console.log(url + ` post has been deleted.`));
    }

    handleAddCommentButtonClick() {

    }

    isDeleted(flag) {
        return flag ? "TRUE" : "FALSE";
    }

    render() {
        const {post} = this.props;
        return (
            <div key={post.id} className="card">
                <div className="container">
                    <div className="post-title">{post.title} (id: {post.id})</div>
                    <div className="post-body">Body: {post.body}</div>
                    <div className="post-author">Author: {post.author}</div>
                    <div className="post-category">Category: {post.category}</div>
                    <div className="post-vote-score">{post.voteScore} <button type="button" value="+1">+1</button> <button type="button" value="-1">-1</button></div>
                    <div className="post-comment-count" hidden="true">TODO: Number of Comments</div>
                    <div className="post-delete-flag">DELETED FLAG: {this.isDeleted(post.deleted)}</div>
                    <div><Link className="btn" role="button" to="/createEditView" onClick={this.handleAddCommentButtonClick()}>Add Comment</Link></div>
                    <div>
                        <Link className="btn" role="button" to="/createEditView" onClick={this.handleEditButtonClick()}>Edit Post</Link>
                        <Link className="btn" role="button" to="/" onClick={(event) => this.handleDeleteButtonClick(post.id)}><img src={DeleteIcon} alt="delete icon" width="25px" height="25px" /></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Post;