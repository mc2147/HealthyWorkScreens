import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Headline, Paragraph } from 'react-native-paper';
import { RectangleButton } from '../Components';

export default class EnableNotifications extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={[styles.centerContainer, { backgroundColor: '#5DBC88' }]}>
          <Headline style={[styles.title, { color: 'white' }]}>
            Enable Notifications testing
          </Headline>
          <Paragraph style={{ color: 'white', textAlign: 'center' }}>
            So we can send you notifications and alerts related to your medical conditions.
          </Paragraph>
          <Image style={[styles.fullWidthImage, { marginTop: 30 }]} source={require('../assets/EnableNotificationsImage.png')} />
        </View>
        <RectangleButton
          buttonFunction={() => this.props.navigation.navigate('SendEmail', {})}
          text='Skip'
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
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
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