import React, { Component } from 'react';

import {Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import data from "./data/data";

import './App.scss';

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
            }
            if (action === "killed") {
                updateItem = {...oldData, killed: !oldData.killed};
                newData = [...before, updateItem, ...after];
                return {
                    players: newData
                }
            }
            if (action === "believe") {
                updateItem = {...oldData, believe: !oldData.believe};
                newData = [...before, updateItem, ...after];
                return {
                    players: newData
                }
            }
            if (action === "dontBelieve") {
                updateItem = {...oldData, dontBelive: !oldData.dontBelive};
                newData = [...before, updateItem, ...after];
                return {
                    players: newData
                }
            };

    })}

    render(){
        const counterPlayers = this.state.players.length;
        const counterKilled = this.state.players.filter(item => item.killed).length;
        const counterBelieve = this.state.players.filter(item => item.believe).length;
        const counterDontBellieve = this.state.players.filter(item => item.dontBelive).length;

        const counterStats = {
            counterPlayers, 
            counterKilled,
            counterBelieve,
            counterDontBellieve,
        }

        return(
            <div className="app">
                <Header
                    counterStats={counterStats}
                />
                <Container>
                    <Main
                        counterStats={counterStats}
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
