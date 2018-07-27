import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, FlatList, TouchableOpacity, TouchableNativeFeedback,
  Button,
  Platform } from 'react-native';
import { DefaultTheme, Headline, Paragraph, TextInput,
  Appbar, AppbarAction, AppbarBackAction, AppbarContent, AppbarHeader, 
  // Button,
  ListAccordion, Divider,
  ListSection, withTheme,
  Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction, 
  FAB, DrawerSection, Colors,
  Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { Constants } from 'expo';
import Slideshow from 'react-native-slideshow';

  
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerBackImage: require('./assets/back-icon.svg'),
        headerTitle:'Sign In',
        headerLeft:(<Text style={styles.headerLeft}>X</Text>)
      };
  };
  render() {
    return (
      <PaperProvider theme={theme} style={styles.container}>  
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
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Walkthrough', {})}
      >
      <View style={styles.buttonView}>
        <Text style={{color: 'white'}}>Next</Text> 
      </View> 
    </TouchableNativeFeedback>      
      </PaperProvider>
    );
  }
}

class Walkthrough extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        header: null
      };
  };
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/any',
        },
      ],
    };
  }
    render() {
    return (
      <PaperProvider theme={theme} style={styles.container}>  
      <Slideshow 
      style={{marginTop:Constants.statusBarHeight}}
      position={this.state.position}
      onPositionChanged={position => this.setState({ position })}
      dataSource={this.state.dataSource} 
      height={'60%'} 
      arrowSize={0}/> 
      <View style={styles.centerContainer}>
        <Headline style={styles.largeTitle}>
        Your Personalized Health Alert Program 
         </Headline>    
        <Paragraph style={styles.centerText}>Notifications tailored to your personal health conditions and regiment.</Paragraph>
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('ConfirmEmail', {})} 
        > 
          <View style={styles.roundButtonView}>   
            <Text style={{color: 'white'}}>Get Started</Text> 
          </View>  
        </TouchableNativeFeedback>      
      </View> 
      </PaperProvider>
    );
  }
} 

class ConfirmEmail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerBackImage: require('./assets/back-icon.svg'),
        headerTitle:'Sign In',
        headerLeft:(<Text style={styles.headerLeft}>X</Text>)
      };
  };
  render() {
    return (
      <PaperProvider theme={theme} style={styles.container}>  
      <View style={styles.container}>
        <Image source={require('./assets/Email-Icon.png')} />
        <Headline style={styles.title}>
        We've sent you an email!
        </Headline>    
        <Paragraph>
        This email contains a unique link that will sign you in. 
        Open your email client below and tap the link to return to the app.</Paragraph>
        <TextInput
        style={styles.textInput} 
        placeholder='Email Address'
        />        
      </View> 
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Home', {})}
      >
      <View style={styles.buttonView}>
        <Text style={{color: 'white'}}>Open Email</Text> 
      </View> 
    </TouchableNativeFeedback>      
      </PaperProvider>
    );
  }
}
 
const styles = StyleSheet.create({
  buttonView: {
    width: '100%', 
    height: 80, 
    backgroundColor: '#5DBC88', 
    alignItems:'center', 
    justifyContent: 'center'
  },
  roundButtonView: {
    width: '100%', 
    height: 50, 
    backgroundColor: '#5DBC88', 
    alignItems:'center', 
    justifyContent: 'center',
    borderRadius:45,
  },
  fullWidthButton: {
    backgroundColor:'#5DBC88',
    width: '100%',
    height:50  
  },  
  textInput: {
    width:'100%',
    marginTop:20, 
    marginBottom:20 
  },
  centerText: {
    textAlign:'center',
    fontSize:10,
    marginBottom:10,
  },
  largeTitle: {
    textAlign:'center',
    fontSize: 25,
    // fontWeight:'bold',
    marginTop:15, 
    marginBottom:15 
  },
  title: {
    textAlign:'left',
    fontSize: 18,
    fontWeight:'bold',
    marginTop:30, 
    marginBottom:30 
  }, 
  statusBar: {
    backgroundColor: "#C2185B",
    color: 'white',
    height: Constants.statusBarHeight,
  },  
  appbar: {
    marginTop: Constants.statusBarHeight,
    // height:80
  },
  appbarcontent: {
    color:'white'
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:20,
    paddingRight:20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft:20,
    paddingRight:20,
  },
  avatar: {
    height: 40,
    width: 40,
  },  
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  headerLeft: {
    marginLeft: 10,
  }
});

export default createStackNavigator(
  {
    ConfirmEmail: {
      screen: ConfirmEmail,
    },
    Walkthrough: {
      screen: Walkthrough,
    }, 
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName:'Home'
  }
);
