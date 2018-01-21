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

class PostDetailView extends Component {
    state = {
        post: '',
        comments: []
    };

    outputComments() {
            if (this.state.comments.length !== 0) {
                return (
                <ul>
                    {this.state.comments.map((comment) => { return <li key={comment.id}>{comment.body} {comment.author} {comment.timestamp}</li>})}
                </ul>
                );
            } else {
                return (<div>There are no comments for this post.</div>);
            }
    }

    componentDidMount() {
        console.log("Post Detail View");
        console.log("post id: " + this.props.match.params.postId);
        fetch(`http://localhost:3001/posts/${this.props.match.params.postId}/comments`, {headers: Constants.headers}).then((res) => res.json() ).then((data) => {
            console.log(data);
            this.setState({comments: data});
        });
    }

    render() {
        return (
            <div>
                <div>PostDetailView</div>
                <Home />
                <Post post='' showDetailViewButton='false'/>
                <div>Comments</div>
                <p>There are {this.state.comments.length} comments</p>
                {this.outputComments()}
            </div>
        )
    }
}

export default PostDetailView;