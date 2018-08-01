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
        <Image style={styles.fullWidthImage} source={require('./assets/Email-Icon.png')} />
        <Headline style={styles.title}>
        We've sent you an email! 
        </Headline>    
        <Paragraph>
        This email contains a unique link that will sign you in. 
        Open your email client below and tap the link to return to the app.</Paragraph>
      </View>  
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('NoAccount', {})}
      >
      <View style={styles.buttonView}>
        <Text style={{color: 'white'}}>Open Email</Text> 
      </View> 
    </TouchableNativeFeedback>      
      </PaperProvider>
    );
  }
}

class NoAccount extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        header: null,
      };
  };
  render() {
    return (
      <PaperProvider theme={theme} style={styles.container}>  
      <View style={styles.centerContainer}>
        <Image style={[styles.fullWidthImage, {marginTop:Constants.statusBarHeight}]} source={require('./assets/NoAccountImage.png')} />
        <Headline style={[styles.title, {marginTop: 0}]}> 
        No Account Found 
        </Headline> 
        <Paragraph>
        Unfortunately, we couldn't find an account for either you or your employer 
        in our system. If you think this is in error, please contact your HR department 
        or visit our support site below.</Paragraph>
        <Paragraph style={[styles.centerText, {color:'#5DBC88'}]}>Sign In With A Different Email</Paragraph>
        <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('CreateProfile', {})} 
        > 
          <View style={styles.roundButtonView}>   
            <Text style={{color: 'white'}}>Visit Healthyworks Support</Text> 
          </View>  
        </TouchableNativeFeedback>        
      </View>        
      </PaperProvider>
    );
  }
}

class CreateProfile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerBackImage: require('./assets/back-icon.svg'),
        headerTitle:'Create a profile', 
        headerLeft:(<Text style={styles.headerLeft}>X</Text>)
      };
  }; 
  componentDidMount() {
    // StatusBar.setBarStyle('light-content');
  }
  render() {
    return (
      <PaperProvider theme={theme} style={styles.container}>  
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
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('EnableNotifications', {})}
      >
      <View style={styles.buttonView}>
        <Text style={{color: 'white'}}>Continue</Text> 
      </View> 
    </TouchableNativeFeedback>      
      </PaperProvider>
    );
  }
}

class EnableNotifications extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
        header:null,
        // headerBackImage: require('./assets/back-icon.svg'),
        // headerTitle:'', 
        // headerLeft:(<Text style={styles.headerLeft}></Text>)
      };
  }; 
  componentDidMount() {
    // StatusBar.setBarStyle('light-content');
  }
  render() {
    return (
      <PaperProvider theme={theme} style={[styles.container, {backgroundColor: '#5DBC88'}]}>  
      <View style={[styles.centerContainer, {backgroundColor: '#5DBC88'}]}>
        <Headline style={[styles.title, {color:'white'}]}>
        Enable Notifications
        </Headline>    
        <Paragraph style={{color:'white', textAlign:'center'}}>So we can send you notifications and alerts related to your medical conditions.</Paragraph>
        <Image style={[styles.fullWidthImage, {marginTop:30}]} source={require('./assets/EnableNotificationsImage.png')} />
      </View> 
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Home', {})}
      >
      <View style={styles.buttonView}>
        <Text style={{color: 'white'}}>Skip</Text> 
      </View> 
    </TouchableNativeFeedback>      
      </PaperProvider>
    );
  }
}

 
const styles = StyleSheet.create({
  fullWidthImage: {
    width: '100%', 
    alignItems:'center', 
    justifyContent: 'center'
  },
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
    EnableNotifications: {
      screen:EnableNotifications,
    },
    NoAccount: {
      screen: NoAccount,
    },
    ConfirmEmail: {
      screen: ConfirmEmail,
    },
    Walkthrough: {
      screen: Walkthrough,
    }, 
    Home: {
      screen: Home,
    },
    CreateProfile: {
      screen: CreateProfile,
    }, 
  },
  {
    initialRouteName:'Home'
  }
);
