'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class HomeHeader extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>我的阅读</Text>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        height: 45,
        justifyContent: 'center',
        backgroundColor: '#1296db'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
    },

});