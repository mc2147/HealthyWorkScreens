import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default class RectangleButton extends React.Component {
    render() {
        return (
            <TouchableRipple
                onPress={this.props.buttonFunction}
                style={styles.buttonView}
            >
                <View style={styles.buttonView}>
                    <Text style={{ color: 'white' }}>{this.props.text}</Text>
                </View>
            </TouchableRipple>
        )
    }
}

const styles = StyleSheet.create({
    buttonView: {
        height: 80,
        backgroundColor: '#5DBC88',
        alignItems: 'center',
        justifyContent: 'center'
    },
});