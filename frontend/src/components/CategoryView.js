/*
Category View
- identical to the default view, but filtered to only include posts with the selected category
*/

import React, { Component } from 'react';
import Home from './Home';

class CategoryView extends Component {
    state = {
        categoryName: ''
    };

    componentDidMount() {
        this.setState({categoryName: this.props.categorName});
    }

    handleEditButtonClick() {}

    render() {
        return (
            <div>
            <div>Category View - {this.state.categoryName}</div>
            <Home />
            </div>
        );
    }
}

export default CategoryView;