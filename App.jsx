import React from 'react';
import {Text, View} from 'react-native';
import Audio from './components/Audio';
import MainPage from './screens/MainPage';

function App() {
  return (
    <View>
      <Audio />
      <MainPage />
    </View>
  );
}

export default App;
