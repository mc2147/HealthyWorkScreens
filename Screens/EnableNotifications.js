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
import { RectangleButton, RoundButton, WideImage } from '../Components';
import Slideshow from 'react-native-slideshow';

export default class EnableNotifications extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
          header:null,
        };
    }; 
    render() {
      return (
        <PaperProvider style={[styles.container, {backgroundColor: '#5DBC88'}]}>  
        <View style={[styles.centerContainer, {backgroundColor: '#5DBC88'}]}>
          <Headline style={[styles.title, {color:'white'}]}>
          Enable Notifications testing
          </Headline>    
          <Paragraph style={{color:'white', textAlign:'center'}}>
            So we can send you notifications and alerts related to your medical conditions.
          </Paragraph>
          <Image style={[styles.fullWidthImage, {marginTop:30}]} source={require('../assets/EnableNotificationsImage.png')} />
        </View> 
        <RectangleButton
            buttonFunction={() => this.props.navigation.navigate('SendEmail', {})}
            text='Skip'
        />
        </PaperProvider>
      );
    }
  }
  
  const styles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight:20,
    },
    textInput: {
      width:'100%',
      marginTop:20, 
      marginBottom:20 
    },
    title: {
      textAlign:'left',
      fontSize: 18,
      fontWeight:'bold',
      marginTop:30, 
      marginBottom:30 
    }, 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingLeft:20,
      paddingRight:20,
    },
    headerLeft: {
      marginLeft: 10,
    },
    fullWidthImage: {
        width: '100%', 
        alignItems:'center', 
        justifyContent: 'center'
    },    
    centerText: {
        textAlign:'center',
        fontSize:10,
        marginBottom:10,
    },    
  });