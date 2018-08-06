import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { withTheme, Headline, Paragraph, Button } from 'react-native-paper';

class EnableNotifications extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { colors } = this.props.theme;
    return (
      <View style={styles.wrapper}>
        <View style={[styles.centerContainer, { backgroundColor: colors.primary }]}>
          <Headline style={[styles.title, { color: colors.background }]}>
            Enable Notifications testing
          </Headline>
          <Paragraph style={{ color: colors.background, textAlign: 'center' }}>
            So we can send you notifications and alerts related to your medical conditions.
          </Paragraph>
          <Image style={[styles.fullWidthImage, { marginTop: 30 }]} source={require('../assets/EnableNotificationsImage.png')} />
        </View>

        <Button
          color={colors.background}
          raised
          style={[styles.fullWidthButton, { backgroundColor: colors.primary }]}
          onPress={() => this.props.navigation.navigate('Walkthrough')}
        >
          Skip
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullWidthButton: {
    alignSelf: "stretch",
    paddingVertical: 24,
  },
  wrapper: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  fullWidthImage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default withTheme(EnableNotifications);
