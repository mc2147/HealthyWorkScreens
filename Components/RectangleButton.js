import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple, withTheme } from 'react-native-paper';

function RectangleButton(props) {
    const { colors } = props.theme;
    return (
        <TouchableRipple
            onPress={props.buttonFunction}
            style={[styles.buttonView, { backgroundColor: colors.primary }]}
        >
            <Text style={{ color: colors.background }}>{props.text}</Text>
        </TouchableRipple>
    )
}

export default withTheme(RectangleButton);

const styles = StyleSheet.create({
    buttonView: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
});