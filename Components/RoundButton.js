import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default function RoundedButton (props) {
    return (
        <TouchableRipple
            onPress={props.onPress}
            style={styles.roundButtonView}
        >
            <View style={styles.roundButtonView}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: 'white', 
        textAlign: 'center'
    },
    roundButtonView: {
        width: '100%',
        height: 50,
        backgroundColor: '#5DBC88',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
    },
});
