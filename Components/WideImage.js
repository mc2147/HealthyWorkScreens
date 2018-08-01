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

// Props: image URL
export default class WideImage extends React.Component {
    render() {
        return(
            <Image 
              style={[styles.fullWidthImage, this.props.style]} 
              source={{uri:this.props.URI}}
            />
        )
    }
}  

const styles = StyleSheet.create({
  fullWidthImage: {
    width: '100%', 
    alignItems:'center', 
    justifyContent: 'center'
  },
});