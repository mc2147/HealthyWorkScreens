import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';
import { RoundButton, WideImage } from '../Components';

export default class NoAccount extends React.Component {
    static navigationOptions = {
      header: null
    };

    render() {
      return (
        <View style={styles.centerContainer}>
            <Image style={styles.fullWidthImage} source={require('../assets/NoAccountImage.png')} />          
            <WideImage 
                uri='../assets/NoAccountImage.png'
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
      );
    }
  }       

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },  
    centerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:20, 
    },
    textInput: {
      width:'100%',
      marginVertical:20,
    },
    title: {
      textAlign:'left',
      fontSize: 18,
      fontWeight:'bold',
      marginVertical:30,
    }, 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingHorizontal:20, 
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