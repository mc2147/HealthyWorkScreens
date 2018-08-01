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
} from '../Screens';

export default createStackNavigator(
  {
    ConfirmEmail: {
      screen: ConfirmEmail,
    },
    Walkthrough: {
      screen: Walkthrough,
    }, 
    SendEmail: {
      screen: SendEmail,  
    }, 
    NoAccount: {
      screen: NoAccount,
    },
    CreateProfile: {
      screen: CreateProfile,
    }, 
    EnableNotifications: {
      screen:EnableNotifications,
    },
  },
  {
    initialRouteName:'SendEmail'
  }
);
