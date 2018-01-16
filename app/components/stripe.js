import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    stripe: {
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerElement: {
        flexDirection: 'row',
        marginLeft: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
    },  
    rightElement: {
        flex: 1,
        height: 30,
    }
})

class Stripe extends Component {
    render() {
        return (
            <TouchableHighlight onPress={(value) => this.props.onPress(value)} >
                <View style={styles.stripe}>
                    <Text style={{textAlign: 'left', marginLeft: 20, color: '#CED0CE', width:50}} >{this.props.picture}</Text>
                    <View style={styles.centerElement}>
                        <Text>{this.props.text}</Text>
                        <View >
                            <Image style={{height:20, width:20}} source={require('../images/rn-chevron-right.png')}/>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

export default Stripe;