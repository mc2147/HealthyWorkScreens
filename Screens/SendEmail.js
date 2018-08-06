import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme, Headline, Paragraph, TextInput, Button } from 'react-native-paper';


class SendEmail extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
  };

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={styles.wrapper}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
          <Headline style={styles.title}>
            What's your work email?
          </Headline>
          <Paragraph>Enter your work email address and we'll send you a magic link to sign in. No passwords required.</Paragraph>
          <TextInput
            style={styles.textInput}
            placeholder='Email Address'
          />
        </View>
        <Button
          color={colors.background}
          raised
          style={[styles.fullWidthButton, { backgroundColor: colors.primary }]}
          onPress={() => this.props.navigation.navigate('ConfirmEmail')}
        >
          Next
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
  textInput: {
    alignSelf: "stretch",
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
  },
  headerLeft: {
    marginLeft: 10,
  }
});

export default withTheme(SendEmail);
