import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import React, {useEffect, useRef, useState, useCallback} from 'react';
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
  const [characterBtnHeight, setCharacterBtnHeight] = useState(75.001);
  const [characterBtnColor, setCharacterBtnColor] = useState('blue');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCharacterBtnClick = () => {
    if (isExpanded) {
      setCharacterBtnHeight(75.001);
      setCharacterBtnColor('blue');
    } else {
      setCharacterBtnHeight(prevHeight => prevHeight - 5);
      setCharacterBtnColor('red');
    }
    setIsExpanded(prevState => !prevState);
  };

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
              <Image source={Images.Character1} style={styles.character1} />
              <Image source={Images.Character2} style={styles.character2} />
              <Image source={Images.Character3} style={styles.character3} />
            </View>
          </View>
          <Image
            source={Images.CharacterPageTitle}
            style={styles.CharacterPageTitle}
          />
          <TouchableOpacity
            onPress={handleCharacterBtnClick}
            style={[
              styles.CharacterBtn,
              {height: characterBtnHeight, backgroundColor: characterBtnColor},
            ]}>
            <Image
              source={Images.CharacterBtn}
              style={styles.CharacterBtnImage}
            />
          </TouchableOpacity>
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
  character1: {
    position: 'absolute',
    width: 81.992,
    height: 240.821,
    flexShrink: 0,
    right: 100,
    top: -35,
  },
  character2: {
    position: 'absolute',
    width: 112.713,
    height: 266.435,
    flexShrink: 0,
    right: 205,
    top: -60,
  },
  character3: {
    position: 'absolute',
    width: 81.966,
    height: 240.818,
    flexShrink: 0,
    right: 340,
    top: -35,
  },
  CharacterPageTitle: {
    width: '85%',
    height: 200,
    flexShrink: 0,
    top: 140,
    right: -50,
  },
  CharacterBtn: {
    width: 130.606,
    flexShrink: 0,
    top: 420,
    right: -200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  CharacterBtnImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CharacterSelectPage;
