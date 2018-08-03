import React from 'react';
import { StyleSheet, View, 
  Platform } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';
import { Constants } from 'expo';
import { RoundButton, Slideshow } from '../Components';

export default class Walkthrough extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
      position: 1,
      interval: null,
      data: [
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

    render() {
      return (
        <View style={styles.wrapper}>  
        <Slideshow 
        style={{marginTop:Constants.statusBarHeight}}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })}
        dataSource={this.state.data} 
        height={'60%'} 
        arrowSize={0}/> 
        <View style={styles.centerContainer}>
          <Headline style={styles.largeTitle}>
          Your Personalized Health Alert Program 
           </Headline>    
          <Paragraph style={styles.centerText}>Notifications tailored to your personal health conditions and regiment.</Paragraph>
          <RoundButton
              onPress={() => this.props.navigation.navigate('ConfirmEmail', {})} 
              text='Get Started'
          />
        </View> 
        </View>
      );
    }
  } 
  
const styles = StyleSheet.create({
wrapper: {
    flex: 1,
},  
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
    marginVertical:20,
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
    marginVertical:15,
},
title: {
    textAlign:'left',
    fontSize: 18,
    fontWeight:'bold',
    marginVertical:30,
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
    paddingHorizontal:20,
},
container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal:20,
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