/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    SectionList,
    Alert
} from 'react-native';

export default class untitled5 extends Component {


    render() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                showLogAlert(request.responseText);
                console.log('success', request.responseText);
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'https://mywebsite.com/endpoint/');
        request.send();

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    This is my second class!! Come on!!!
                </Text>


                <Text style={{fontSize: 16, color: 'red'}}>This is FlatList</Text>
                <FlatList data={[
                    {key: 'Qiao'},
                    {key: 'Zhang'},
                    {key: 'Wang'},
                    {key: 'Liang'},
                    {key: 'Wei'},
                    {key: 'OuYang'},
                    {key: 'Zhao'},
                    {key: 'Jing'},
                ]} renderItem={({item}) => <Text style={{fontSize: 16, fontFamily: 'bold'}}>{item.key}</Text>}
                />

                <Text style={{fontSize: 16, color: 'red', marginTop: 20,}}>This is SectionList</Text>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                        {title: 'G', data: ['Gackson', 'Games', 'Gillian', 'Gimmy', 'Goel', 'Gohn', 'Gulie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />

            </View>
        );
    }
}

const showLogAlert = (requestString) => {
    Alert.alert(requestString);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FCFF',
    },
    flatListItem: {
        width: 20,
        height: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

AppRegistry.registerComponent('untitled5', () => untitled5);
