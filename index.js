import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native'; // This replaces react-dom for React Native
import store from './src/redux/Store';
import App from './App';
import { name as appName } from './app.json'; // Import the app name

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
