import React from 'react';

import {AppRegistry, Button, Text, View, StyleSheet,} from 'react-native';

import {StackNavigator} from 'react-navigation';

import ThreeScreen from './Three.js';
import SecondScreen from './Second.js';
import FirstScreen from './First.js';


class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };

    render() {
        const {navigate} =
            this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() =>
                        navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}


class ChatScreen extends React.Component {
    static navigationOptions = {
        title: '聊天页面',
    };

    render() {
        const {navigate} =
            this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text style={{flex: 1, textAlign: 'center'}}>Chat with Lucy</Text>


                <View style={styles.bottom}>
                    <Button
                        style={styles.btnStyle}
                        onPress={() =>
                            navigate('Three')}
                        title="ThreeScreen"
                    />
                    <Button
                        style={styles.btnStyle}
                        onPress={() =>
                            navigate('Second')}
                        title="SecondScreen"
                    />
                    <Button
                        style={styles.btnStyle}
                        onPress={() =>
                            navigate('First')}
                        title="FirstScreen"
                    />
                </View>
            </View>
        );
    }
}

// All component must add into here,
// and  the component that not in this class will import into this class .
// Like this import ThreeScreen from './Three.js';
const untitled5 =
    StackNavigator({
        Home: {
            screen:
            HomeScreen
        },
        Chat: {
            screen:
            ChatScreen
        },
        Three: {
            screen:
            ThreeScreen
        },
        Second: {
            screen:
            SecondScreen
        },
        First: {
            screen:
            FirstScreen
        }
    });


const styles = StyleSheet.create({
    btnStyle: {
        flex: 1,
        backgroundColor: 'white',
        textAlign: 'center',
        color: 'black'
    },
    bottom: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white'
    },
});

AppRegistry.registerComponent('untitled5', () => untitled5);
