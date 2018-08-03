import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Headline, Paragraph, TextInput } from 'react-native-paper';
import { RectangleButton } from '../Components';


export default class SendEmail extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    return (
      <View style={styles.wrapper}>
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
          text='Next'
          buttonFunction={() => this.props.navigation.navigate('Walkthrough', {})}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  textInput: {
    width: '100%',
    marginVertical: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  headerLeft: {
    marginLeft: 10,
  }
});