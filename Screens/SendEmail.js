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
import { RectangleButton } from '../Components';
import Slideshow from 'react-native-slideshow';

  
export default class SendEmail extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
          headerBackImage: require('../assets/back-icon.svg'),
          headerTitle:'Sign In',
          headerLeft:(<Text style={styles.headerLeft}>X</Text>) 
        }; 
    }; 
    render() { 
      return (
        <PaperProvider style={styles.container}>  
        <View style={styles.container}> 
          <Headline style={styles.title}>
          What's your work email?
          </Headline>    
          <Paragraph>Enter your work email address and we'll send you a magic link to sign in. No passwords required.</Paragraph>
          <TextInput
          style={styles.textInput} 
          placeholder='Email Address'
          />        
        </View>     
        <RectangleButton
            text='Next (component)'
            buttonFunction={() => this.props.navigation.navigate('Walkthrough', {})}
        />
        </PaperProvider>
      );
    }
  }

const styles = StyleSheet.create({
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
    }
  });