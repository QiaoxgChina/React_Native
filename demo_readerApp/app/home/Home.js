import React, {Component} from 'react';
import ViewPager from 'react-native-viewpager';
import MainButton from './MainButton.js';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Alert
} from 'react-native';


const BANNER_IMGS = [
    require('../images/1.jpg'),
    require('../images/2.jpg'),
    require('../images/3.jpg'),
    require('../images/4.jpg')
];

export default class Home extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 130}}>
                    <ViewPager
                        style={{height: 130}}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}/>
                </View>
                <View style={styles.buttonParentView}>
                    <MainButton buttonTitle="历史"
                                buttonIcon={require('../images/home_icons/cz.png')}
                                tag="历史"
                                onClick={this.buttonOnClick}/>
                    <MainButton buttonTitle="文学"
                                buttonIcon={require('../images/home_icons/dyp.png')}
                                tag="文学"
                                onClick={this.buttonOnClick}/>
                    <MainButton buttonTitle="短篇"
                                buttonIcon={require('../images/home_icons/gd.png')}
                                tag="短篇"
                                onClick={this.buttonOnClick}/>
                    <MainButton buttonTitle="军事"
                                buttonIcon={require('../images/home_icons/ljd.png')}
                                tag="军事"
                                onClick={this.buttonOnClick}/>
                </View>

                <View style={styles.buttonParentView}>
                    <MainButton buttonTitle="玄幻"
                                buttonIcon={require('../images/home_icons/wdgz.png')}
                                tag="玄幻"
                                onClick={this.buttonOnClick}/>
                    <MainButton buttonTitle="青春"
                                buttonIcon={require('../images/home_icons/wlcx.png')}
                                tag="青春"
                                onClick={this.buttonOnClick}/>
                    <MainButton buttonTitle="暗黑"
                                buttonIcon={require('../images/home_icons/xjk.png')}
                                tag="暗黑"
                                onClick={this.buttonOnClick}/>
                    <MainButton buttonTitle="科幻"
                                buttonIcon={require('../images/home_icons/yxcz.png')}
                                tag="科幻"
                                onClick={this.buttonOnClick}/>
                </View>
                <View style={{height: 0.2, backgroundColor: '#bfbfbf'}}></View>
            </View>
        )
    }

    buttonOnClick(tag) {
        Alert.alert('提示', 'the tag is ' + tag);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
    buttonParentView: {
        height: 80,
        flexDirection: 'row'
    },
})