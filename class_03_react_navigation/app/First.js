import React from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class First extends React.Component {
    static navigationOptions = {
        title: '第一个页面',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

export default First;