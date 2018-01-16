import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput, TouchableHighlight } from 'react-native';

class TextBox extends Component {

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

    checkPress = (value) => {
        if(this.props.onPress){
            this.props.onPress(value);
        }
    }

    render() {
        return (  
            <View>
                <TouchableHighlight 
                    style={this.props.style}
                    onPress={(value) => this.checkPress(value)}
                    height={this.props.height}
                    underlayColor={this.props.underlayColor}
                    
                >
                    <Text style={{color:this.props.textColor, fontSize:20}} >
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        )
      
    }
}

export default TextBox;