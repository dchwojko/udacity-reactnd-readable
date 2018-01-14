/*
Default (Root)
- should list all available categories, which should link to a category view for that category
- should list all of the posts
- should have a control for changing the sort method for the list, including at minimum, order by voteScore and order by timestamp
- should have a control for adding a new post
*/
import React, { Component } from 'react';

const headers = {
    'Authorization': 'witcher_mo',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

class RootView extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        fetch(`http://localhost:3001/categories`, {headers: headers}).then((res) => res.json() ).then((data) => this.setState({categories: data.categories}))
    }    

    buildCategory = (category) => {
        return (
            <div>   
            <div key={category.name}>{category.name}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>Categories</h1>
                {this.state.categories.map((category) => { return this.buildCategory(category)})}
            </div>
        )
    }
}

export default RootView;