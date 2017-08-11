'use strict';
import React, {Component, PropTypes} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback
} from 'react-native';


export default class MineItem extends Component {
    static propTypes = {
        renderLabel: PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        showText: PropTypes.string,  // 显示标题\文字
        tag: PropTypes.string,  // Tag
        onClick: PropTypes.func  // 回调函数
    };

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this._onClick}>
                    <View style={styles.buttonItem}>
                        <Image source={this.props.renderLabel} style={styles.labelType}></Image>
                        <Text
                            style={styles.showText}>{this.props.showText}</Text>
                        <Image source={require('../images/label_right.png')}
                               style={styles.labelRight}></Image>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

}
const styles = StyleSheet.create({
    container: {
        height: 50.2,
        justifyContent: 'center',
        backgroundColor: '#bfbfbf'
    },
    buttonItem: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 0.2
    },
    labelType: {
        width: 25,
        height: 25,
        alignItems: 'flex-start',
        marginTop: 12.5,
        marginLeft: 20
    },
    labelRight: {
        width: 25,
        height: 25,
        alignItems: 'flex-end',
        marginTop: 12.5,
        marginRight: 15
    },
    showText: {
        color: '#999999',
        marginTop: 15,
        marginLeft: 10,
        flex: 1
    }

});