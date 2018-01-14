/*
Create/Edit View
- should have a form to create new post or edit existing posts
- when editing, existing data should be populated in the form
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

class CreateEditView extends Component {
    state = {
        editMode: false
    };

    componentDidMount() {
        this.setState({editMode: false});
    }

    render() {
        return (
            <div>
            <div>Mode (true = create, false = edit): {this.state.editMode}</div>
            <Home />
            </div>
        )
    }
}

export default CreateEditView;