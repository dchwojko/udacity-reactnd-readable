import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component { 

    handleHomeButtonClick() {

    }

    render() {
        return (
            <div><Link className="btn" role="button" to="/" onClick={this.handleHomeButtonClick()}>Home</Link></div>
        );
    }
}

export default Home;