import React, { Component } from 'react';
import { Text, View, Picker, PickerIOS } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import styles from '../style';
import {connect} from 'dva-no-router';
import TextBox from '../../components/textBox';
import Stripe from '../../components/stripe';

class Categories extends Component {

    categoryChange=(value) => {
        this.props.dispatch({
            type: 'categories/categoryChange',
            category: value,
        })
    }

    timeChange=(itemValue, itemIndex) => {
        this.props.dispatch({
            type: 'categories/timeChange',
            timeLimit: parseInt(itemValue),
        })
    }

    _next=() => {
        Actions.game();
    }

    render() {
        console.log('MAP -------> ', this.props.teams);
        return (
            <View style={[styles.container, {justifyContent: 'flex-start'}]} >
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, flex: 1}} >
                    <TextBox
                        style={this.props.category === 'Easy' ? styles.textBoxContainerPressed:styles.textBoxContainer}
                        onPress={(value) => this.categoryChange('Easy')}
                        text='Easy'
                        textColor='white'
                    />
                    <TextBox
                        style={this.props.category === 'Hard' ? styles.textBoxContainerPressed:styles.textBoxContainer}
                        onPress={(value) => this.categoryChange('Hard')}
                        text='Hard'
                        textColor='white'
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 20, flex: 1}} >
                    <TextBox
                        style={this.props.category === 'Food' ? styles.textBoxContainerPressed:styles.textBoxContainer}
                        onPress={(value) => this.categoryChange('Food')}
                        text='Food'
                        textColor='white'
                    />
                    <TextBox
                        style={this.props.category === 'Celebrities' ? styles.textBoxContainerPressed:styles.textBoxContainer}
                        onPress={(value) => this.categoryChange('Celebrities')}
                        text='Celebrities'
                        textColor='white'
                    />
                </View>
                <View style={{flex: 1}} >
                    <Text style={styles.label} >You have selected {this.props.category}</Text>
                </View>
                <View style={{flex: 5}} >
                    <Text style={styles.label}>Please pick the time limit for each round</Text>
                    <Picker style={{flex:2}}
                        selectedValue={this.props.timeLimit} 
                        onValueChange={this.timeChange}>
                        <Picker.Item label='30 seconds' value={parseInt('30')} />
                        <Picker.Item label='60 seconds' value={parseInt('60')} />
                        <Picker.Item label='90 seconds' value={parseInt('90')} />
                        <Picker.Item label='120 seconds' value={parseInt('120')} />
                    </Picker>
                </View>
                <View style={{flex: 1}} >
                <Text style={styles.label} >Each round is {this.props.timeLimit} seconds! {this.props.teams[this.props.teamIndex][0]} will be starting first.</Text>
                </View>
                <View style={{alignItems: 'center', flex:1, margin:10}}>
                    <TextBox
                        style={styles.textBoxContainer}
                        onPress={this._next}
                        text='Next'
                        textColor='white'
                        underlayColor='darkblue'
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.category,
        timeLimit: state.categories.timeLimit,
        teamIndex: state.categories.teamIndex,
        teams: state.home.teams,
    };
}

export default connect(mapStateToProps)(Categories);