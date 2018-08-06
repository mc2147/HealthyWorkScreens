import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { withTheme, Headline, Paragraph } from 'react-native-paper';
import { RectangleButton } from '../Components';

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
        <RectangleButton
          buttonFunction={() => this.props.navigation.navigate('Walkthrough', {})}
          text='Skip'
        />
      </View>
    );
  }
}

export default withTheme(EnableNotifications);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
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
    marginVertical: 20,
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