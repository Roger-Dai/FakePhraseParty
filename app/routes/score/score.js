import React, { Component } from 'react';
import { Text, View, Picker, PickerIOS } from 'react-native';
import {connect} from 'dva-no-router';
import styles from '../style';
import TextBox from '../../components/textBox';



class Score extends Component {

    render() {
        return(
            <View style={styles.container} >
                <Text>Round over!</Text>
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

export default connect(mapStateToProps)(Score);