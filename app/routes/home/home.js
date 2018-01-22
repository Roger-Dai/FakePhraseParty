import React, { Component } from 'react';
import { Text, View, Picker, PickerIOS, Button } from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import styles from '../style';
import {connect} from 'dva-no-router';
import TextBox from '../../components/textBox';
import TextInput from '../../components/textInput';

class Home extends Component {
  
  _pickerChange=(itemValue, itemIndex) => {
    this.props.dispatch({
      type: 'home/_pickerChange',
      numTeams: itemValue,
    })
  };

  _next=() => {
    Actions.categories();
  }

  handleChange=(value) => {
    this.props.dispatch({
      type:'home/textChange',
      msg: value,
    })
  }

  enterName=() => {
    var tempTeam = [];
    tempTeam.push(this.props.msg);
    tempTeam.push(0);
    this.props.teams.push(tempTeam);
    this.props.dispatch({
      type: 'home/enterName',
      teams: this.props.teams,
    })
  }

  render() {
    const teams = [];
    for(let i=0; i < this.props.numTeams; i++ ) {
      teams.push(
        <View key = {i} style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center', flex: 1}} >
          <Text style={{marginRight: 40}} >Team {i+1}</Text>
          <TextInput
            // style={{height: 40}}
            placeholder="Type your team name!"
            onChangeText={(value) =>this.handleChange(value)}
            clearButtonMode='while-editing'
          /> 
          <Button onPress={this.enterName} title='Enter' />
			  </View>
      )
    }

    return (
      <View style={styles.container} >
        <View style={[styles.subContainer, {flex: 1}]} >
          <Text style={styles.label}>Please pick the number of teams</Text>
        </View>
        <Picker style={{flex:2}}
          selectedValue={this.props.numTeams} 
          onValueChange={this._pickerChange}>
          <Picker.Item label='2' value='2' />
          <Picker.Item label='3' value='3' />
          <Picker.Item label='4' value='4' />
          <Picker.Item label='5' value='5' />
        </Picker>
        <View style={{alignItems: 'center', flex:4, margin:10, flexDirection: 'column'}} >
          <Text style={styles.label} >You are playing with {this.props.numTeams} teams of two. You can enter team names if you want to.</Text>
          {teams}
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
    );
  }
}

const mapStateToProps = state => {
    return {
      numTeams: state.home.numTeams,
      msg: state.home.msg,
      teams: state.home.teams,
    };
}

export default connect(mapStateToProps)(Home);
