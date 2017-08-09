import React
    from 'react';

import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';

import {
    StackNavigator
}
    from 'react-navigation';

import ThreeScreen
    from './Three.js';

class HomeScreen
    extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
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

class ChatScreen
    extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        const {navigate} =
            this.props.navigation;
        return (
            <View>
                <Text>Chat with Lucy</Text>
                <Button
                    onPress={() =>
                        navigate('Three')}
                    title="to to ThreeScreen"
                />
            </View>
        );
    }
}


const SimpleApp =
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

    });


AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
