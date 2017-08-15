import React, {
    Component
}
    from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

class Second extends React.Component {
    static navigationOptions = {
        title: '第二个页面',
    };

    render() {
        const {goBack} =
            this.props.navigation;
        return (
            <View>
                <Text style={styles.textContent}>This is second screen page! Welcome!!!</Text>
                <Button
                    title="Go back"
                    onPress={() =>
                        goBack()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textContent: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center',
    },
});
export default Second;
