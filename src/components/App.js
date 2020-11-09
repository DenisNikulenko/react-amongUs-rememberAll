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
            data,
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.onToogleKilled = this.onToogleKilled.bind(this);
        this.onToogleBelieve = this.onToogleBelieve.bind(this);
        this.onToogleDontBelieve = this.onToogleDontBelieve.bind(this);
    }

    deleteItem(id) {
        this.setState(({data})=> {
            const index = data.findIndex(item => item.id === id);
            const newData = [...data.slice(0, index), ...data.slice(index + 1)];

            return {
                data: newData
            }
        });
    }

    onToogleKilled(id, action) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            console.log(index)

            const oldData = data[index];
            const updateItem = {...oldData, killed: `!oldData.${action}`};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, updateItem, ...after];

            return {
                data: newData
            };

        });
    }

    onToogleBelieve(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldData = data[index];
            const updateItem = {...oldData, believe: !oldData.believe};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, updateItem, ...after];

            return {
                data: newData
            };

        });
    }

    onToogleDontBelieve(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);

            const oldData = data[index];
            const updateItem = {...oldData, dontBelive: !oldData.dontBelive};

            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, updateItem, ...after];

            return {
                data: newData
            };

        });
    }

    render(){
        return(
            <div className="app">
                    <Header />
                    <Container>
                        <Main
                            peoples={this.state.data}
                            onDelete={this.deleteItem}
                            onKilled={this.onToogleKilled}
                            onBelieve={this.onToogleBelieve}
                            onDontBelieve={this.onToogleDontBelieve}
                        />
                    </Container>
                    <Footer />
            </div>
        );
    }
};
