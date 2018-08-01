import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, StatusBar, FlatList, TouchableOpacity, TouchableNativeFeedback,
  Button,
  Platform } from 'react-native';
import { DefaultTheme, Headline, Paragraph, TextInput,
  Appbar, AppbarAction, AppbarBackAction, AppbarContent, AppbarHeader, 
  Card, CardContent,
  // Button,
  ListAccordion, Divider,
  ListSection, withTheme,
  Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction, 
  FAB, DrawerSection, Colors,
  Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import { Constants } from 'expo';
import Slideshow from 'react-native-slideshow';
import { 
  SendEmail, 
  Walkthrough, 
  ConfirmEmail,
  NoAccount,
  CreateProfile,
  EnableNotifications 
} from './Screens';
import AppNavigator from './Navigation';
// import *  as AppNavigator from './Navigation';
// import { AppNavigator } from './Navigation';
export default class App extends React.Component {
  render() {
      return (
          <AppNavigator/>
      );
  }
}
