'use strict';
import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Text
} from 'react-native';

import Header from './Header.js';
import Home from './Home.js';
import Mine from './Mine.js';
import Message from './Message.js';
import Collection from './Collection.js';

const HOME = '首页';
const HOME_NORMAL = require('../images/home.png');
const HOME_FOCUS = require('../images/home_press.png');

const FAXIAN = '收藏';
const FAXIAN_NORMAL = require('../images/collection.png');
const FAXIAN_FOCUS = require('../images/collection_press.png');
const MESSAGE = '消息';

const MESSAGE_NORMAL = require('../images/message.png');
const MESSAGE_FOCUS = require('../images/message_press.png');
const PERSONAL = '我的';

const PERSONAL_NORMAL = require('../images/mine.png');
const PERSONAL_FOCUS = require('../images/mine_press.png');

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {selectedTab: HOME}
    }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({selectedTab: tag})}
                title={tag}
                titleStyle={{color: '#8a8a8a'}}
                selectedTitleStyle={{color: '#1296db'}}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 22}}>{tag}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
                <Header/>
                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {/*{this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <HomePage nav={this.props.nav}/>)}*/}
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <Home/>)}
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, <Collection/>)}
                    {this._renderTabItem(MESSAGE_NORMAL, MESSAGE_FOCUS, MESSAGE, <Message/>)}
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, <Mine/>)}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tab: {
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    tabIcon: {
        width: 25,
        height: 25,
        resizeMode: 'stretch',
        marginTop: 10
    }
});