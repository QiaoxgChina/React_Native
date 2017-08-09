import React, {
    Component
}
    from 'react';

import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';

class Three
    extends React.Component {
    static navigationOptions = {
        title: 'Three Sceen',
    };
    render() {
        const {goBack} =
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