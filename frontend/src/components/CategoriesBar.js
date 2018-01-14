import React, { Component } from 'react';
import CategoryView from './CategoryView';
import { Link } from 'react-router-dom';

const headers = {
    'Authorization': 'witcher_mo',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

class CategoriesBar extends Component {

    state = {
        categories: []
    };

    componentDidMount() {
        fetch(`http://localhost:3001/categories`, {headers: headers}).then((res) => res.json() ).then((data) => this.setState({categories: data.categories}))
    }    

    handleEditButtonClick() {}

    buildCategory = (category) => {
        return (
                <Link key={category.name} className="btn" role="button" key={category.name} to={`/categoryView/${category.name}`} onClick={this.handleEditButtonClick()}>{category.name}</Link>
        );
    }

    render() {
        return (
            <div>{this.state.categories.map((category) => { return this.buildCategory(category)})}</div>
        );
    }
}

export default CategoriesBar;