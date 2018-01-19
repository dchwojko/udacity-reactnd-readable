import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Constants from './Constants';

class CategoriesBar extends Component {

    state = {
        categories: []
    };

    componentDidMount() {
        fetch(`http://localhost:3001/categories`, {headers: Constants.headers}).then((res) => res.json() ).then((data) => this.setState({categories: data.categories}))
    }    

    handleCategoryButton() {}

    buildCategory = (category) => {
        return (
            <Link key={category.name} className="btn" role="button" to={`/categoryView/${category.name}`} onClick={this.handleCategoryButton()}>{category.name}</Link>
        );
    }

    render() {
        return (
            <div>Categories: 
                <Link key="all" className="btn" role="button" to="/" onClick={this.handleCategoryButton()}>All</Link>
                {this.state.categories.map((category) => { return this.buildCategory(category)})}
            </div>
        );
    }
}

export default CategoriesBar;