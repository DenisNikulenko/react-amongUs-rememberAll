import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="header">
                <h1>Among Us Вычислить убийцу:</h1>
            </div>
        );
    }
}