import React, { Component } from 'react';
import { Text, View, Picker, PickerIOS } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import {connect} from 'dva-no-router';
import styles from '../style';
import TextBox from '../../components/textBox';
import CountdownCircle from '../../components/react-native-countdown-circle/src/index';


class Game extends Component {

    componentWillMount(){
        var temp = [];
        if(this.props.category === 'Food'){
            temp = this.props.food.split(', ');
        } else if (this.props.category === 'Celebrities'){
            temp = this.props.celebrities.split(', ');
        } else if (this.props.category === 'Hard'){
            temp = this.props.hard.split(', ');
        } else if (this.props.category === 'Easy'){
            temp = this.props.easy.split(', ');
        }
        const shuffle = require('shuffle-array');
        shuffle(this.props.gameList);
        this.props.dispatch({
            type: 'game/list',
            gameList: temp,
        })
    }
    
    _onPress=() => {
        if(this.props.index + 1 >= this.props.gameList.length){
            alert('You have reached the end of the category!')
        }
        this.props.dispatch({
            type: 'game/next',
            index: this.props.index + 1,
        })
    }

    _score=() => {
        Actions.score()
    }

    render() {
        return( 
            <View style={styles.container} >
                <CountdownCircle
                    seconds={this.props.timeLimit}
                    radius={30}
                    borderWidth={8}
                    color="#ff003f"
                    bgColor="#fff"
                    textStyle={{ fontSize: 20 }}
                    onTimeElapsed={() => {Actions.score()}}
                />
                <TextBox
                    style={[styles.textBoxContainer, { width: '100%', height: '85%', backgroundColor: 'white'}]}
                    onPress={this._onPress}
                    text={this.props.gameList[this.props.index]}
                    underlayColor='white'
                />
                <TextBox
                    style={styles.textBoxContainer}
                    onPress={this._score}
                    text='Score'
                    textColor='white'
                    underlayColor='darkblue'
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        index: state.game.index,
        category: state.categories.category,
        timeLimit: state.categories.timeLimit,
        food: state.dictionaries.food,
        celebrities: state.dictionaries.celebrities,
        hard: state.dictionaries.hard,
        easy: state.dictionaries.easy,
        gameList: state.game.gameList,
    };
}

export default connect(mapStateToProps)(Game);