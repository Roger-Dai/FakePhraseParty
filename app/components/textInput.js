import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    textinputContainer: {
        flex: 3,
        backgroundColor: '#F6F6F6',
        borderRadius: 5,
        justifyContent: 'center',
    },
});

class TextInputComponent extends Component {

    passValue = () => {
        if(this.props.value){
          this.props.value();
        }
    }

    onChange = (value) => {
        if(this.props.onChangeText){
          this.props.onChangeText(value);
        }
    }

    render() {
        return (  
            <TextInput
                style={{height: 40}}
                placeholder="Type your input!"
                onChangeText={(value) => this.onChange(value)}
                value={this.props.value}
                clearButtonMode='while-editing'
            />
        )
      
    }
}

export default TextInputComponent;