import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, FlatList, TouchableOpacity, TouchableNativeFeedback,
  Button,
  Platform } from 'react-native';
import { DefaultTheme, Headline, Paragraph, TextInput,
  Appbar, AppbarAction, AppbarBackAction, AppbarContent, AppbarHeader, 
  Card, CardContent,
  // Button,
  ListAccordion, Divider,
  ListSection, withTheme,
  Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction, 
  FAB, DrawerSection, Colors,
  Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { Constants } from 'expo';
import Slideshow from 'react-native-slideshow';

// Props: width, color, inner text, function
export default class RoundedButton extends React.Component {
    render() {
        return(
            <TouchableNativeFeedback
            onPress={() => this.props.onPress()} 
            > 
              <View style={styles.roundButtonView}>   
                <Text style={{color: 'white', textAlign:'center'}}>{this.props.text}</Text> 
              </View>  
            </TouchableNativeFeedback>            
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
