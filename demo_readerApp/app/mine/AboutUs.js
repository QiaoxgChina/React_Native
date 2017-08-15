import React, {Component} from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default class AboutUs extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 18, color: '#999999', textAlign: 'center'}}>This is About Us page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})