import React from 'react';
import {Text, View} from 'react-native';
import Audio from './components/Audio';
import MainPage from './screens/MainPage';

function App() {
  return (
    <View>
      <Text>Hello, world!</Text>
      <Audio />
      <MainPage />
    </View>
  );
}

export default App;
