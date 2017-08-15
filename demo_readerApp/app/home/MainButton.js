import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

export default class MainButton extends Component {

    static propTypes = {
        buttonIcon: PropTypes.number.isRequired,
        buttonTitle: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        tag: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this._onClick}>
                    <View style={styles.container}>
                        <Image source={this.props.buttonIcon} style={styles.buttonIcon}/>
                        <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.tag);  // 回调Title和Tag
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonIcon: {
        width: 45,
        height: 45,
    },
    buttonTitle: {
        fontSize: 14,
        color: 'black',
        marginTop: 3,
        textAlign: 'center'
    }
})