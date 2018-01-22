/*
Post Detail View
- should show the details of a post, including: Title, Body, Author, timestamp (in user readable format), and vote score
- should list all of the comments for that post
- should have controls to edit or delete the post
- should have a control to add a new comment.
- implement comment form however you want (inline, modal, etc.)
- comments should also have controls for editing or deleting
*/
import React, { Component } from 'react';
import Home from './Home';
import Constants from './Constants';
import Post from './Post';
import Comment from './Comment';

class PostDetailView extends Component {
    state = {
        post: '',
        comments: []
    };

    async deleteComment(id) {
        console.log(`deleting comment: ${id}`);
        await fetch(`${Constants.url}/comments/${id}`, {headers: Constants.headers}, {method: Constants.DELETE}).then((res) => res.json()).then(() => console.log('deleted comment'));
        // TO DO: handle error
    }

    outputComments() {
            if (this.state.comments.length !== 0) {
                return (
                    this.state.comments.map((comment) => { return <Comment key={comment.id} comment={comment} deleteComment={this.deleteComment(comment.id)}/>})
                );
            } else {
                return (<div>There are no comments for this post.</div>);
            }
    }

    async getPost(id) {
        await fetch(`${Constants.url}/posts/${id}`, {headers: Constants.headers}).then((res) => res.json()).then((data) => {this.setState({post: data})});
    }

    componentDidMount() {
        console.log("Post Detail View");
        console.log("post id: " + this.props.match.params.postId);
        this.getPost(this.props.match.params.postId);
        this.getComments();
    }

    async getComments() {
        await fetch(`http://localhost:3001/posts/${this.props.match.params.postId}/comments`, {headers: Constants.headers}).then((res) => res.json() ).then((data) => {
            console.log(data);
            this.setState({comments: data});
        });
    }

    render() {
        return (
            <div className="posts-lists">
                <div>PostDetailView</div>
                <Home />
                <Post post={this.state.post} showDetailViewButton='false'/>
                {this.outputComments()}
            </div>
        )
    }
}
/**/

export default PostDetailView;