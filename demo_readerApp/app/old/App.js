import React, {Component} from 'react';
import {
    Alert,
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
    ViewPagerAndroid
} from 'react-native';

import {StackNavigator} from 'react-navigation';

class HomeComponent extends Component {

    onPressMainButton(typeString) {
        Alert.alert("You clicked the " + typeString);
    }

    static navigationOptions = {
        title: '首页',
        header: null,
        cardStack: {
            gesturesEnabled: false  // 是否可以右滑返回
        }
    };

    render() {
        const {navigate} =
            this.props.navigation;

        return (
            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}>
                    <View style={styles.pageStyle}>
                        <MainPage/>
                    </View>
                    <View style={styles.pageStyle}>
                        <DiscoverPage/>
                    </View>
                    <View style={styles.pageStyle}>
                        <MinePage/>
                    </View>
                </ViewPagerAndroid>

                <View style={{height: 0.2, backgroundColor: 'black'}}></View>
                <View style={styles.bottom}>
                    <TouchableNativeFeedback onPress={() => this.onPressMainButton('Main')}>
                        <View style={styles.bottomBtn}>
                            <Image source={require('../images/home.png')} style={styles.bottomPic}></Image>
                            <Text style={styles.bottomText}>首页</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onPressMainButton('Discover')}>
                        <View style={styles.bottomBtn}>
                            <Image source={require('../images/discover.png')} style={styles.bottomPic}></Image>
                            <Text style={styles.bottomText}>发现</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={() => this.onPressMainButton('Mine')}>
                        <View style={styles.bottomBtn}>
                            <Image source={require('../images/mine.png')} style={styles.bottomPic}></Image>
                            <Text style={styles.bottomText}>我的</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

class MinePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>我的</Text>
                </View>

                <Text style={styles.welcome}>
                    Welcome to React Native!!!
                </Text>
                <Text style={styles.instructions}>
                    This is new new Mine page
                </Text>
            </View>
        );
    }

}

class MainPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>首页</Text>
                </View>

                <Image source={require('../images/1.png')} style={{height: 150}}></Image>

                {/*<ViewPagerAndroid*/}
                {/*style={styles.picViewPager}*/}
                {/*initialPage={0}>*/}
                {/*<View style={styles.picPageStyle}>*/}
                {/*/!*<Image source={require('./images/jessicajung.png')} style={{height: 100}}></Image>*!/*/}
                {/*<Text style={{color: 'black'}}>first picture</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.picPageStyle}>*/}
                {/*/!*<Image source={require('./images/jessicajung.png')} style={{height: 100}}></Image>*!/*/}
                {/*<Text style={{color: 'black'}}>second picture</Text>*/}
                {/*</View>*/}
                {/*<View style={styles.picPageStyle}>*/}
                {/*/!*<Image source={require('./images/jessicajung.png')} style={{height: 100}}></Image>*!/*/}
                {/*<Text style={{color: 'black'}}>three picture</Text>*/}
                {/*</View>*/}
                {/*</ViewPagerAndroid>*/}
                <Text style={{flex: 1, textAlign: 'center'}}>
                    This is new Main page!!
                </Text>
            </View>
        );
    }

}

class DiscoverPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>发现</Text>
                </View>
                <Text style={styles.welcome}>
                    Welcome to React Native!!!
                </Text>
                <Text style={styles.instructions}>
                    This is new Discover page
                </Text>
            </View>
        );
    }

}

const MyRnApp =
    StackNavigator({
        Home: {
            screen:
            HomeComponent
        },
    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    titleBar: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    titleText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
    bottom: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    bottomBtn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomPic: {
        width: 25,
        height: 25,
    },
    bottomText: {
        color: 'gray',
        fontSize: 12,
        textAlign: 'center'
    },
    viewPager: {
        flex: 1
    },
    picViewPager: {
        height: 80,
    },
    pageStyle: {
        flex: 1
    },
    picPageStyle: {
        height: 100,
        backgroundColor: 'yellow'
    }
});

AppRegistry.registerComponent('MyRnApp', () => MyRnApp);
