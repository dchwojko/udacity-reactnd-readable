/*
Create/Edit View
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

const headers = {
    'Authorization': 'witcher_mo',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

class CreateEditView extends Component {
    state = {
        editMode: false,
        title: '',
        body: '',
        author: '',
        category: '',
        categories: [],
    };

/*
    POST /posts
      USAGE:
        Add a new post

      PARAMS:
        id - UUID should be fine, but any unique id will work
        timestamp - timestamp in whatever format you like, you can use Date.now() if you like
        title - String
        body - String
        author - String
        category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.
*/

    createPost() {
        var timestamp = Date.now();
        const body = JSON.stringify({
            'id': '1',
            'timestamp': timestamp,
            'title': this.state.title,
            'body': this.state.body,
            'author': 'don',
            'category': 'redux'
        });
        fetch(`http://localhost:3001/posts`, {headers: headers, method: 'POST', body: body}).then((res) => res.json() ).then((data) => console.log('adding post'));
        // TODO: handle error

    }

    componentDidMount() {
        this.setState({editMode: false});
    }

    async updateTitle(title) {
        await this.setState({title: title});
        console.log(this.state.title);
    }

    async updateBody(body) {
        await this.setState({body: body});
        console.log(this.state.body);
    }

    async updateAuthor(author) {
        console.log(this.state.author);
        await this.setState({author: author});
        console.log(this.state.author);
    }

    async updateCategory(category) {
        await this.setState({category: category});
        console.log(this.state.category);
    }

    render() {
        return (
            <div>
                <Home />
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <th>Title:</th><td><input type="text" name={this.state.title} onChange={(event) => this.updateTitle(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <th>Body:</th>
                            <td>
                                <textarea rows="4" cols="50" onChange={(event) => this.updateBody(event.target.value)}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>Author:</th>
                            <td><input type="text" name={this.state.author} onChange={(event) => this.updateAuthor(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <th>Category:</th>
                            <td>
                                <select onChange={(event) => this.updateCategory(event.target.value)}>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><Link to="/"><input type="submit" value="Submit" onClick={(event) => {
                                this.createPost();
                                }}/></Link><Link to="/"><input type="submit" value="Cancel"/></Link></td>
                        </tr>
                    </tbody>
                </table>
            <div>Mode (true = create, false = edit): {this.state.editMode}</div>
            </div>
        )
    }
}



export default CreateEditView;

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