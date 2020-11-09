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

    onToogleKilled(id) {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            console.log(index)

            const oldData = data[index];
            const updateItem = {...oldData, killed: !oldData.killed};

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
                <Container>
                    <Header />
                    <Main
                        peoples={this.state.data}
                        onDelete={this.deleteItem}
                        onKilled={this.onToogleKilled}
                    />
                    <Footer />
                </Container>
            </div>
        );
    }
};
