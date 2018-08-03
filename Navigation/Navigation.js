import { createStackNavigator } from 'react-navigation';
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
      screen: EnableNotifications,
    },
  },
  {
    initialRouteName: 'ConfirmEmail'
  }
);
