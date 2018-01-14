import React, { Component } from 'react'

class Post extends Component {
    state = {
        timestamp: this.props.timestamp,
        title: this.props.title,
        body: this.props.body,
        author: this.props.author,
        category: this.props.category,
        voteScore: this.props.voteScore,
        readonly: true
    };

    savePost = () => {
        this.setState({readonly: true});
    }

    editPost = () => {
        this.setState({readonly: false});
    }

    render() {
        const {categories} = this.props;
        return (
            <div>
                <table>
                    <tbody>
                <tr><td>Timestemp</td><td><input type="text" placeholder="placeholdertext" value={this.state.timestamp} readOnly={this.state.readonly} /></td></tr>
                <tr><td>Title</td><td><input type="text" placeholder="placeholdertext" value={this.state.title} readOnly={this.state.readonly}/></td></tr>
                <tr><td>Body</td><td><textarea value={this.state.body} readOnly={this.state.readonly}/></td></tr>
                <tr><td>Author</td><td><input type="text" placeholder="placeholdertext" value={this.state.author} readOnly={this.state.readonly}/></td></tr>
                <tr><td>Category</td><td><select value={this.state.category} readOnly={this.state.readonly}>
                    {categories.map((category) => {return <option key={category.name} readOnly={this.state.readonly} value={category.name}>{category.path}</option>})}
                </select></td></tr>
                <tr><td>Vote Score</td><td><input type="text" placeholder="placeholdertext" value={this.state.voteScore} readOnly={this.state.readonly}/></td></tr>
                <tr><td>
                    <input type="button" value="Edit" onClick={this.editPost} readOnly={this.state.readonly} />
                    <input type="button" value="Save" onClick={this.savePost} readOnly={this.state.readonly} />
                </td></tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default Post;

/*
id	String	Unique identifier
timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
title	String	Post title
body	String	Post body
author	String	Post author
category	String	Should be one of the categories provided by the server
voteScore	Integer	Net votes the post has received (default: 1)
deleted	Boolean	Flag if post has been 'deleted' (inaccessible by the front end), (default: false)
*/