import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Home from './routes/home/home';
import Categories from './routes/categories/categories';
import Game from './routes/game/game';
import Score from './routes/score/score';


export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" component={Home} title="Home"></Scene>
                    <Scene key="categories" component={Categories} title="Game Setup"></Scene>
                    <Scene key="game" component={Game} title="Game"></Scene>
                    <Scene key="score" component={Score} title="Score"></Scene>
                </Stack>
            </Router>
        );
    }
}