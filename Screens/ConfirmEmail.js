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

export default class ConfirmEmail extends React.Component {
    static navigationOptions = ({ navigation }) => {
      return {
          headerBackImage: require('../assets/back-icon.svg'),
          headerTitle:'Sign In',
          headerLeft:(<Text style={styles.headerLeft}>X</Text>)
        };
    };
    render() {
      return (
        <PaperProvider style={styles.centerContainer}>  
        <View style={styles.centerContainer}>
            <Image style={styles.fullWidthImage} source={require('../assets/Email-Icon.png')} />          
            <WideImage
                URI='../assets/Email-Icon.png'
                style={styles.fullWidthImage} 
            />
          <Headline style={styles.title}>
          We've sent you an email!
          </Headline>    
          <Paragraph>
          This email contains a unique link that will sign you in. 
          Open your email client below and tap the link to return to the app.</Paragraph>
        </View>  
        <RectangleButton
            text='Open Email'
            buttonFunction={() => this.props.navigation.navigate('NoAccount', {})}
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
  });