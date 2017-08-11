import React, {Component} from 'react';
import ViewPager from 'react-native-viewpager';

import {
    View,
    StyleSheet,
    Text,
    Image
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
                <ViewPager
                    style={{height: 130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>

                <Text style={{flex: 1}}>首页</Text>
            </View>
        )
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
    }
})