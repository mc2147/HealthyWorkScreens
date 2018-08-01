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

export default class NoAccount extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
          header: null,
        };
    };
    render() {
      return (
        <PaperProvider style={styles.centerContainer}>  
        <View style={styles.centerContainer}>
            <Image style={styles.fullWidthImage} source={require('../assets/NoAccountImage.png')} />          
            <WideImage 
                URI='../assets/NoAccountImage.png'
                style={styles.fullWidthImage} 
            />
          <Headline style={[styles.title, {marginTop: 0}]}> 
          No Account Found
          </Headline> 
          <Paragraph style={styles.centerText}>
          Unfortunately, we couldn't find an account for either you or your employer 
          in our system. If you think this is in error, please contact your HR department 
          or visit our support site below.</Paragraph>
          <Paragraph style={[styles.centerText, {color:'#5DBC88'}]}>Sign In With A Different Email</Paragraph>
          <RoundButton
          onPress={() => this.props.navigation.navigate('CreateProfile', {})}
          text='Visit Healthyworks Support'
          />
        </View>        
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