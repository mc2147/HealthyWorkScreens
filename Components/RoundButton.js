import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withTheme, TouchableRipple } from 'react-native-paper';

function RoundedButton(props) {
    const { colors } = props.theme;
    return (
        <TouchableRipple
            onPress={props.onPress}
            style={[styles.roundButtonView, { backgroundColor: colors.primary }]}
        >
            <Text style={[styles.buttonText, { color: colors.background }]}>{props.text}</Text>
        </TouchableRipple>
    )
}

export default withTheme(RoundedButton);

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center'
    },
    roundButtonView: {
        width: '100%',
        height: 50,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
    },
});
