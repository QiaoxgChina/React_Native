/**
 * Created by yuanguozheng on 16/3/10.
 */
'use strict';
import React, {Component} from 'react';
import {
    View,
    Text,
    WebView,
    Platform
} from 'react-native';

export default class JdWebView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.os === 'ios' ? 20 : 0}}>
                <Text>this.props.url</Text>
                <WebView startInLoadingState={true}
                         javaScriptEnabled={true}
                         url={this.props.url}
                         source={{uri: this.props.url, method: 'GET'}}/>
            </View>
        )
    }
}