import React,{Component}
    from 'react';

import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';

class Three extends React.Component {
    static navigationOptions = {
        title: '第三个页面',
    };
    render() {
        const { goBack } =
            this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() =>
                    goBack()}
            />
        );
    }
}

export default Three;
