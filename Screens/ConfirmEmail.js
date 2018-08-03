import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';
import { RectangleButton, WideImage } from '../Components';

export default class ConfirmEmail extends React.Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.centerContainer}>
          <Image style={styles.fullWidthImage} source={require('../assets/Email-Icon.png')} />
          <WideImage
            uri='../assets/Email-Icon.png'
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
    paddingHorizontal: 20,
  },
  textInput: {
    width: '100%',
    marginVertical: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 30,
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
  },
  fullWidthImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});