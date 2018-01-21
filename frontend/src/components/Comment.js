import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '../assets/Delete_Icon.png';

class Comment extends Component {

    handleEditButtonClick() {
        // TO DO
    }

    render() {
        const {comment, deleteComment} = this.props;
        return (
            <div key={comment.id} className="card">
                <div className="container">
                    <div className="comment-parentId">{comment.parentId}</div>
                    <div className="comment-timestamp">{comment.timestamp}</div>
                    <div className="comment-id">Comment ID: <i>(id: {comment.id}</i>)</div>
                    <div className="comment-body">Body: {comment.body}</div>
                    <div className="comment-author">Author: {comment.author}</div>
                    <div className="comment-vote-score">{comment.voteScore} <button type="button" value="+1">+1</button> <button type="button" value="-1">-1</button></div>
                    <div>
                        <Link className="btn" role="button" to={`/createEditView`} onClick={this.handleEditButtonClick()} id="editPostButton">Edit Comment</Link>
                        <Link className="btn" role="button" to="/" onClick={(event) => deleteComment(comment.id)} id="deleteButton"><img src={DeleteIcon} alt="delete icon" width="25px" height="25px" /></Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default Comment;

/*
id: '8tu4bsun805n8un48ve89',
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
*/