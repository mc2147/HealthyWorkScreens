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

export default class CreateProfile extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
          headerBackImage: require('../assets/back-icon.svg'),
          headerTitle:'Create a profile', 
          headerLeft:(<Text style={styles.headerLeft}>X</Text>)
        };
    }; 
    render() {
      return (
        <PaperProvider style={styles.container}>  
        <View style={styles.container}>
          <Headline style={styles.title}>
          Welcome!
          </Headline>    
          <Paragraph>Since this is your first time, we just need some basic information from you.</Paragraph>
          <TextInput
          label='Full Name'
          // autoFocus={true}
          style={[styles.textInput, {marginTop:0, marginBottom:0}]} 
          />        
          <TextInput
          style={[styles.textInput, {marginTop:0, marginBottom:0}]} 
          // autoFocus={true}
          placeholder='Month Day Year'
          label='Birthdate'
          />        
          <TextInput
          style={[styles.textInput, {marginTop:0, marginBottom:0}]} 
          // autoFocus={true}
          placeholder='Male'
          label='Gender'
          />        
        </View> 
        <RectangleButton
            buttonFunction={() => this.props.navigation.navigate('EnableNotifications', {})}
            text='Continue'
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