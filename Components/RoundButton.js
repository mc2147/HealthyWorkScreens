import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WithTheme, TouchableRipple } from 'react-native-paper';

export default function RoundedButton (props) {
    // const { colors } = props.theme;
    return (
        <TouchableRipple
            onPress={props.onPress}
            style={styles.roundButtonView}
        >
            <View style={styles.roundButtonView}>
                <Text style={{ color: 'white', textAlign: 'center' }}>{props.text}</Text>
            </View>
        </TouchableRipple>
    )
}

// export default WithTheme(RoundedButton);


const styles = StyleSheet.create({
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
