import React from 'react';
import { StyleSheet } from 'react-native';
import { Headline, Paragraph, TextInput } from 'react-native-paper';
import { RectangleButton } from '../Components';

export default class CreateProfile extends React.Component {
    
    static navigationOptions = {
      title:'Create a Profile',
    };

    render() {
      return (
        <View style={styles.wrapper}>
        <View style={styles.container}>
          <Headline style={styles.title}>
          Welcome!
          </Headline>    
          <Paragraph>Since this is your first time, we just need some basic information from you.</Paragraph>
          <TextInput
          label='Full Name'
          style={[styles.textInput, {marginTop:0, marginBottom:0}]} 
          />        
          <TextInput
          style={[styles.textInput, {marginTop:0, marginBottom:0}]} 
          placeholder='Month Day Year'
          label='Birthdate'
          />        
          <TextInput
          style={[styles.textInput, {marginTop:0, marginBottom:0}]} 
          placeholder='Male'
          label='Gender'
          />        
        </View> 
        <RectangleButton
            buttonFunction={() => this.props.navigation.navigate('EnableNotifications', {})}
            text='Continue'
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