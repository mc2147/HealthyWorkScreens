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
          color='white'
          raised
          style={[styles.fullWidthButton, { backgroundColor: colors.primary }]}
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
    paddingVertical: 20,
    width: '100%',
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30
  },
  headerLeft: {
    marginLeft: 10,
  },
  fullWidthImage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerText: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 10,
  },
});

export default withTheme(CreateProfile);
