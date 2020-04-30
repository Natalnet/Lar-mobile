import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import React from 'react';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#464647" />
      <Routes />
    </>
  );
}
