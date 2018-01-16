import React, { Component } from 'react';
import { Text, View, Picker, PickerIOS } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import {connect} from 'dva-no-router';
import styles from '../style';
import TextBox from '../../components/textBox';
import CountdownCircle from 'react-native-countdown-circle';


class Game extends Component {

    componentWillMount(){
        global.duration = this.props.timeLimit;
        if(this.props.category === 'Food'){
            global.gameList = this.props.food.split(', ');
        } else if (this.props.category === 'Celebrities'){
            global.gameList = this.props.celebrities.split(', ');
        } else if (this.props.category === 'Hard'){
            global.gameList = this.props.hard.split(', ');
        } else if (this.props.category === 'Easy'){
            global.gameList = this.props.easy.split(', ');
        }
        const shuffle = require('shuffle-array');
        shuffle(gameList);
        
    }

    _onPress=() => {
        if(this.props.index + 1 >= gameList.length){
            alert('You have reached the end of the category!')
        }
        this.props.dispatch({
            type: 'game/next',
            index: this.props.index + 1,
        })
    }

    _next=() => {
        Actions.score();
    }

    _updateText=(elapsedSecs, totalSecs) => {
        this.props.dispatch({
            type: 'categories/tick',
            timeLimit: this.props.timeLimit - 1,
        })
        return (
            (totalSecs - elapsedSecs).toString()
        )
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
                    onTimeElapsed={this._next}
                    updateText={this._updateText}
                />
                <TextBox
                    style={[styles.textBoxContainer, { width: '100%', height: '100%', backgroundColor: 'white'}]}
                    onPress={this._onPress}
                    text={gameList[this.props.index]}
                    underlayColor='white'
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
    };
}

export default connect(mapStateToProps)(Game);