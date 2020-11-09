import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from 'react-bootstrap'

import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import data from "./data/data"

import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.peoples,
            killed: false
        };
        this.deleteItem = this.deleteItem.bind(this)
    }

    deleteItem(id) {
        this.setState(({data})=> {
            console.log(this.state.data)
            const index = data.findIndex(item => item.id === id);
            const newData = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newData
            }
        });
        
    }

    render(){
        return(
            
            <div className="app">
                <Container>
                    <Header />
                    <Main peoples={this.state.data} onDelete={this.deleteItem}/>
                    <Footer />
                </Container>
            </div>
        );

    }

};
