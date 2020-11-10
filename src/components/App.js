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
            players: data.players,
            btns: data.btns,
        };
        this.onToogleAction = this.onToogleAction.bind(this);
    }

    onToogleAction(id, action,) {
        this.setState(({players}) => {
            let updateItem;
            let newData;

            const index = players.findIndex(item => item.id === id);

            const oldData = players[index];
            const before = players.slice(0, index);
            const after = players.slice(index +1);

            if (action === "delete") {
                newData = [...players.slice(0, index), ...players.slice(index + 1)];
                return {
                    players: newData
                }
            } else if (action === "killed") {
                updateItem = {...oldData, killed: !oldData.killed};
                newData = [...before, updateItem, ...after];
                return {
                    players: newData
                }
            } else if (action === "believe") {
                updateItem = {...oldData, believe: !oldData.believe};
                newData = [...before, updateItem, ...after];
                return {
                    players: newData
                }
            } else if (action === "dontBelieve") {
                updateItem = {...oldData, dontBelive: !oldData.dontBelive};
                newData = [...before, updateItem, ...after];
                return {
                    players: newData
                }
            };
    })}

    render(){
        const allPlayers = this.state.players.length
        return(
            <div className="app">
                <Header
                    allPlayers={allPlayers}
                />
                <Container>
                    <Main
                        peoples={this.state.players}
                        btns={this.state.btns}
                        onToogleAction={this.onToogleAction}
                    />
                </Container>
                <Footer />
            </div>
        );
    }
};
