import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
    TouchableWithoutFeedback,
    ToastAndroid
} from 'react-native';

class ReactNative_first extends Component {

    state = {
        count: 0,
        inputText: '',
    };


    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.parentView}>
                <View style={styles.titleBar}>
                    <Image source={require('./app/images/back.png')} style={styles.backPic}/>
                    <Text style={styles.titleText}>This ivbs Title</Text>
                </View>

                <ScrollView style={styles.content}>

                    <TouchableWithoutFeedback onPress={() => {
                        this.setState({
                                count:
                                this.state.count + 1
                            }
                        )
                        ;
                    }}>
                        <View style={styles.button}>
                            <Text style={{flex: 1, height: 40, justifyContent: 'center', alignItems: 'center',}}>
                                单击我查看点击次数
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={{padding: 10, fontSize: 16}}>您单击了:{this.state.count}次</Text>

                    <Text style={{fontSize: 16, color: 'red'}}>{this.state.inputText.split(' ').join('')}</Text>
                    <TextInput style={{flex: 1, height: 40,}} placeholder="please input text"
                               onChangeText={(inputText) => {
                                   this.setState({inputText});
                               }}/>
                </ScrollView>

                <View style={{height: 0.2, backgroundColor: 'black'}}></View>

                <View style={styles.bottom}>
                    <TouchableWithoutFeedback onPress={onHomePress}>
                        <View style={styles.bottomBtn1}>
                            <Image id="home" source={require('./app/images/home.png')} style={styles.bottomPic}/>
                            <Text style={styles.bottomText}>首页</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onDiscoverPress}>
                        <View style={styles.bottomBtn1}>
                            <Image id="home" source={require('./app/images/discover.png')} style={styles.bottomPic}/>
                            <Text style={styles.bottomText}>发现</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={onMinePress}>
                        <View style={styles.bottomBtn1}>
                            <Image id="home" source={require('./app/images/mine.png')} style={styles.bottomPic}/>
                            <Text style={styles.bottomText}>我的</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const onButtonPress = () => {
    Alert.alert('Button has been pressed!!!!!!');
};

const clickCountAdd = () => {
    this.setState({count: this.state.count + 1});
};

const onHomePress = () => {
    Alert.alert('Home');
};

const onDiscoverPress = () => {
    Alert.alert('Discover');
};

const onMinePress = () => {
    Alert.alert('Mine');
};

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
    },
    titleBar: {
        backgroundColor: '#E93B34',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        alignItems: 'center',
        flex: 1,
        color: 'white',
        fontSize: 18,
        marginLeft: 15,
    },
    backPic: {
        width: 25,
        height: 25,
        marginLeft: 10,
        resizeMode: Image.resizeMode.stretch,
    },
    content: {
        backgroundColor: 'white',
        flex: 1,
    },
    okBtn: {
        width: 80,
        height: 30,
    },
    bottom: {
        height: 50,
        flexDirection: 'row',
    },
    bottomBtn1: {
        flex: 1,
        height: 50,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomPic: {
        width: 25,
        height: 25,
        marginTop: 4,
        marginBottom: 2,
    },
    bottomText: {
        flex: 1,
        fontSize: 12,
    },
});

AppRegistry.registerComponent('ReactNative_first', () => ReactNative_first);
