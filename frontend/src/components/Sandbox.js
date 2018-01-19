import React, { Component } from 'react';
import Home from './Home';
import DeleteIcon from '../assets/Delete_Icon.png';

class Sandbox extends Component {

    render() {
        return (
            <div>
                <Home />
                <h3>Delete Icon</h3>
                <img src={DeleteIcon} alt="delete icon" width="25px" height="25px" />
                <h3>Table</h3>
                <div styles="display:table; width:450px; margin:0 auto; margin-top:30px; ">
                    <div styles="display:table-row">
                        <div styles="width:50%">element1</div>
                        <div styles="width:50%">element2</div>
                    </div>
                </div>
                <div styles="display:table; width:450px; margin:0 auto;">
                    <div styles="display:table-row">
                        <div styles="width:100%">element1</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sandbox;