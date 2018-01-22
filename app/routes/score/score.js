import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import {connect} from 'dva-no-router';
import styles from '../style';
import TextBox from '../../components/textBox';



class Score extends Component {

    // componentWillMount=() => {
    //     this.props.dispatch({
    //         type: 'categories/updateIndex',
    //         teamIndex: this.props.teamIndex + 1,
    //     })
    // }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => (
        <View style={{backgroundColor: 'white'}}>
            <Text style={{fontSize: 20, marginTop: 20, marginLeft: 10}}>
                {item[0]}
            </Text>
            <Text style={{fontSize: 15, color: 'red', marginTop: 15, marginLeft: 10, marginBottom: 20}} >
                {item[1]}
            </Text>
        </View>
    );

    _renderSeparator = () => {
        return (
            <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#CED0CE",
            }}
            />
        )
    };

    render() {

        console.log(this.props.teams);

        return(
            <View style={styles.container} >
                <Text>Round over! Your score is {this.props.index}!</Text>
                <FlatList
                    data={this.props.teams}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._renderSeparator}
                    style={{marginBottom: 25}}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        index: state.game.index,
        teams: state.home.teams,
        teamIndex: state.categories.teamIndex,
    };
}

export default connect(mapStateToProps)(Score);