import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppNavigator from './Navigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#5DBC88',
    accent: '#5DBC88',
    text: 'black'
  }
};

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <AppNavigator />
      </PaperProvider>
    );
  }
}
