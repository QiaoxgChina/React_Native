// import MyRnApp from './app/App.js';

'use strict';
import React, {Component} from 'react';
// import { Navigator } from 'react-native-deprecated-custom-components';
import {
    AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import MainScreen from './app/home/MainScreen';

// import JdWebView from './WebView';

class MyRnApp extends Component {
    render() {
        return (
            <MainScreen />
        )
    }

    // static _renderPage(route, nav) {
    //     switch (route.id) {
    //         case 'main':
    //             // return (<MainScreen nav={nav}/>);
    //             break;
    //         // case 'webview':
    //         //     return (<JdWebView url={route.url}/>);
    //         //     break;
    //     }
    // }
}

AppRegistry.registerComponent('MyRnApp', () => MyRnApp);