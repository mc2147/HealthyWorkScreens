import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme, Headline, Paragraph, TextInput, Button } from 'react-native-paper';

class CreateProfile extends React.Component {

  static navigationOptions = {
    title: 'Create a Profile',
  };

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={styles.wrapper}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
          <Headline style={styles.title}>
            Welcome!
          </Headline>
          <Paragraph>Since this is your first time, we just need some basic information from you.</Paragraph>
          <TextInput
            label='Full Name'
            style={[styles.textInput, { marginTop: 0, marginBottom: 0 }]}
          />
          <TextInput
            style={[styles.textInput, { marginTop: 0, marginBottom: 0 }]}
            placeholder='Month Day Year'
            label='Birthdate'
          />
          <TextInput
            style={[styles.textInput, { marginTop: 0, marginBottom: 0 }]}
            placeholder='Male'
            label='Gender'
          />
        </View>
        <Button
          raised
          dark
          primary
          style={styles.fullWidthButton}
          onPress={() => this.props.navigation.navigate('EnableNotifications')}
        >
          Continue
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullWidthButton: {
    alignSelf: "stretch",
    paddingVertical: 24,
    margin: 0
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 24,
    paddingRight: 24,
  },
  textInput: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 32
  },
});

export default withTheme(CreateProfile);
