/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import {Navigator} from 'react-native-deprecated-custom-components'
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import MainScreen from './home/MainScreen';
import JdWebView from './main/WebView';
import AboutUs from './mine/AboutUs';

class MyRnApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: 'main', index: 0, id: 'main'}}
                renderScene={(route, navigator) => MyRnApp._renderPage(route, navigator)}
            />
        )
    }

    static _renderPage(route, nav) {
        switch (route.id) {
            case 'main':
                return (<MainScreen nav={nav}/>);
                break;
            case 'webView':
                return (<JdWebView url={route.url} nav={nav}/>);
                break;
            case 'aboutUs':
                return (<AboutUs nav={nav}/>);
                break;
        }
    }
}

AppRegistry.registerComponent('MyRnApp', () => MyRnApp);