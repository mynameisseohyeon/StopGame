import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Images from '../assets/Images';

function CharacterSelectPage() {
  return (
    <>
      <CharacterSelectPageView />
    </>
  );
}

function CharacterSelectPageView() {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleCharacterPress = character => {
    const isSelected = selectedCharacters.includes(character);

    if (isSelected) {
      setSelectedCharacters(prevCharacters =>
        prevCharacters.filter(char => char !== character),
      );
    } else {
      setSelectedCharacters(prevCharacters => [...prevCharacters, character]);
    }
  };

  const isPlayButtonVisible = selectedCharacters.length === 2;

  return (
    <>
      <View style={styles.block}>
        <Image
          source={Images.CharacterBackground}
          style={styles.backgroundImage}
        />
        <View style={styles.inner}>
          <View style={styles.Character}>
            <View style={styles.charactersRow}>
              <TouchableOpacity
                onPress={() => handleCharacterPress('character1')}
                style={[
                  selectedCharacters.includes('character1') &&
                    styles.selectedCharacter,
                ]}>
                <Image source={Images.Character1} style={styles.character1} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleCharacterPress('character2')}
                style={[
                  selectedCharacters.includes('character2') &&
                    styles.selectedCharacter,
                ]}>
                <Image source={Images.Character2} style={styles.character2} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleCharacterPress('character3')}
                style={[
                  selectedCharacters.includes('character3') &&
                    styles.selectedCharacter,
                ]}>
                <Image source={Images.Character3} style={styles.character3} />
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={Images.CharacterPageTitle}
            style={styles.CharacterPageTitle}
          />
          {isPlayButtonVisible && (
            <TouchableOpacity
              onPress={() => console.log('Play button pressed')}
              style={styles.PlayButton}>
              <Image
                source={Images.CharacterBtn}
                style={styles.CharacterBtnImage}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    position: 'relative',
    height: 844,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: -50,
    left: 0,
    width: '100%',
    height: '90%',
    flexShrink: 0,
  },
  inner: {
    position: 'relative',
    width: 529,
    height: 961,
    flexShrink: 0,
  },
  Character: {
    position: 'absolute',
    width: 311.195,
    height: 266.533,
    flexShrink: 0,
    top: 400,
    right: 0,
  },
  charactersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedCharacter: {
    borderColor: 'white',
    opacity: 0.7,
  },
  character1: {
    width: 81.992,
    height: 240.821,
    flexShrink: 0,
    top: -10,
    right: 105,
  },
  character2: {
    width: 112.713,
    height: 266.435,
    flexShrink: 0,
    top: -10,
    right: 105,
  },
  character3: {
    width: 81.966,
    height: 240.818,
    flexShrink: 0,
    top: -10,
    right: 105,
  },
  CharacterPageTitle: {
    width: '85%',
    height: 200,
    flexShrink: 0,
    top: 140,
    right: -50,
  },
  PlayButton: {
    width: 130.606,
    height: 75.001,
    flexShrink: 0,
    top: 420,
    right: -200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CharacterBtnImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CharacterSelectPage;
