import React from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image, StatusBar, FlatList, TouchableOpacity, TouchableNativeFeedback,
  Button,
  Platform
} from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const styles = StyleSheet.create({
  fullWidthImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView: {
    width: '100%',
    height: 80,
    backgroundColor: '#5DBC88',
    alignItems: 'center',
    justifyContent: 'center'
  },
  roundButtonView: {
    width: '100%',
    height: 50,
    backgroundColor: '#5DBC88',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },
  fullWidthButton: {
    backgroundColor: '#5DBC88',
    width: '100%',
    height: 50
  },
  textInput: {
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  centerText: {
    textAlign: 'center',
    fontSize: 10,
    marginBottom: 10,
  },
  largeTitle: {
    textAlign: 'center',
    fontSize: 25,
    // fontWeight:'bold',
    marginTop: 15,
    marginBottom: 15
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30
  },
  statusBar: {
    backgroundColor: "#C2185B",
    color: 'white',
    height: Constants.statusBarHeight,
  },
  appbar: {
    marginTop: Constants.statusBarHeight,
    // height:80
  },
  appbarcontent: {
    color: 'white'
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  drawerContent: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 22,
  },
  headerLeft: {
    marginLeft: 10,
  }
});

export { styles, theme };
