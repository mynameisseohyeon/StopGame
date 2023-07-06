import React from 'react';
import {Text, View} from 'react-native';
import Audio from './components/Audio';
import MainPage from './screens/MainPage';
import CharacterSelectPage from './screens/CharacterSelectPage';
import PlayPage from './screens/PlayPage';

function App() {
  return (
    <View>
      <Audio />
      {/* <MainPage /> */}
      <CharacterSelectPage />
      {/* <PlayPage /> */}
    </View>
  );
}

export default App;
