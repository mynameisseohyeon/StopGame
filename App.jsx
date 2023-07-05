import React from 'react';
import {Text, View} from 'react-native';
import Audio from './components/Audio';
import MainPage from './screens/MainPage';
import CharacterSelectPage from './screens/CharacterSelectPage';

function App() {
  return (
    <View>
      <Audio />
      <MainPage />
      {/* <CharacterSelectPage /> */}
    </View>
  );
}

export default App;
