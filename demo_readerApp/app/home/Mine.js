'use strict';
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    Alert,
    Button
} from 'react-native';
import MineItem from "./MineItem";


export default class Mine extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{height: 120, backgroundColor: '#1296db', justifyContent: 'center'}}>
                        <Image source={require('../images/default_header.png')} style={styles.userHeader}></Image>
                        <Text style={styles.userName}>点击更换头像</Text>
                    </View>

                    <View style={{height: 0, backgroundColor: 'white', marginTop: 15}}></View>
                    <MineItem renderLabel={require('../images/label_upload.png')}
                              showText={'上传列表'}
                              onClick={this.itemOnClick}
                              tag={'uploadList'}/>
                    <MineItem renderLabel={require('../images/label_download.png')}
                              showText={'下载列表'}
                              onClick={this.itemOnClick}
                              tag={'downloadList'}/>
                    <MineItem renderLabel={require('../images/label_settings.png')}
                              showText={'设置'}
                              onClick={this.itemOnClick}
                              tag={'settings'}/>
                    <MineItem renderLabel={require('../images/label_aboutus.png')}
                              showText={'关于我们'}
                              onClick={this.itemOnClick}
                              tag={'aboutUs'}/>
                    <View style={{height: 0.2, backgroundColor: '#bfbfbf'}}></View>

                    <Button
                        onPress={() => this.props.nav.push({
                            id: 'aboutUs',
                            title: 'aboutUs',
                        })}
                        title="AboutUs"
                    />
                </ScrollView>
            </View>
        );
    }

    goToAboutUs() {
        let navigator = this.props.nav;
        Alert.alert('Button clicked  ' + navigator);
        if (navigator) {
            navigator.push({
                id: 'aboutUs',
                title: 'aboutUs',
            });
        }
    }

    itemOnClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4'
    },
    userHeader: {
        width: 60,
        height: 60,
        alignSelf: 'center'
    },
    userName: {
        height: 30,
        alignSelf: 'center',
        color: 'white',
        marginTop: 5,
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        height: 1000
    },
});