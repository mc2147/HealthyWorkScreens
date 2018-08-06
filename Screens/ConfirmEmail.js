import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { withTheme, Headline, Paragraph, Button } from 'react-native-paper';
import { WideImage } from '../Components';

class ConfirmEmail extends React.Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  render() {

    const { colors } = this.props.theme;

    return (
      <View style={styles.wrapper}>
        <View style={[styles.centerContainer, { backgroundColor: colors.background }]}>
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
        <Button
          color={colors.background}
          raised
          style={[styles.fullWidthButton, { backgroundColor: colors.primary }]}
          onPress={() => this.props.navigation.navigate('NoAccount')}
        >
          Open Email
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  fullWidthButton: {
    alignSelf: "stretch",
    paddingVertical: 20,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  headerLeft: {
    marginLeft: 10,
  },
  fullWidthImage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default withTheme(ConfirmEmail);
