import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

export default class RoundedButton extends React.Component {
    render() {
        return(
            <TouchableRipple
            onPress={() => this.props.onPress()} 
            style={styles.roundButtonView}
            > 
              <View style={styles.roundButtonView}>
                <Text style={{color: 'white', textAlign:'center'}}>{this.props.text}</Text> 
              </View>  
            </TouchableRipple>            
        )
    }
}  

const styles = StyleSheet.create({
    roundButtonView: {
        width: '100%', 
        height: 50, 
        backgroundColor: '#5DBC88', 
        textAlign:'center',
        alignItems:'center', 
        justifyContent: 'center',
        borderRadius:45,
    },
});
