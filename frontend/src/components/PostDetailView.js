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

class PostDetailView extends Component {
    state = {
        post: '',
        comments: []
    };

    outputComments() {
        return (
            <ul>
                {this.state.comments.map((comment) => { return <li key={comment.id}>{comment.body} {comment.author} {comment.timestamp}</li>})}
            </ul>
        )
    }

    componentDidMount() {
        fetch(`http://localhost:3001/posts/8xf0y6ziyjabvozdd253nd/comments`, {headers: Constants.headers}).then((res) => res.json() ).then((data) => this.setState({comments: data}));
        //fetch(`http://localhost:3001/posts/:id/comments`, {headers: headers}).then((res) => res.json() ).then((data) => this.setState({comments: data}));
    }

    render() {
        return (
            <div>
                <div>PostDetailView</div>
                <Home />
                <div>Comments</div>
                <p>There are {this.state.comments.length} comments</p>
                {this.outputComments()}
            </div>
        )
    }
}

export default PostDetailView;