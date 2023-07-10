import React from 'react';
import {Text, View} from 'react-native';
import Audio from './components/Audio';
import MainPage from './screens/MainPage';
import CharacterSelectPage from './screens/CharacterSelectPage';
import PlayPage from './screens/PlayPage';

import SoundPlayer from 'react-native-sound-player';

try {
  SoundPlayer.playSoundFile('mainbgm', 'mp3');
  SoundPlayer.setNumberOfLoops(-1); //오디오 반복 재생
} catch (e) {
  console.log('cannot play the sound file', e);
}

function App() {
  return (
    <View>
      {/* <MainPage /> */}
      {/* <CharacterSelectPage /> */}
      <PlayPage />
    </View>
  );
}

export default App;
