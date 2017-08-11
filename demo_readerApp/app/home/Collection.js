import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default class Collection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/label_nodata.png')}
                       style={styles.noDataPic}></Image>
                <Text style={styles.content}>没有收藏</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        justifyContent: 'center'
    },
    noDataPic: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    content: {
        textAlign: 'center',
        color: '#999999',
        fontSize: 18,
        marginTop: 10
    }
})