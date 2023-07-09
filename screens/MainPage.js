import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {StyleSheet, Animated} from 'react-native';
import Images from '../assets/Images';
import {NavigationContainer} from '@react-navigation/native';
import CharacterSelectPage from './CharacterSelectPage';

function MainPage({navigation}) {
  return (
    <>
      <View>
        <MainPageView>
          {/* <NavigationContainer>
            <CharacterSelectPage />
          </NavigationContainer> */}
        </MainPageView>
      </View>
    </>
  );
}

function MainPageView({navigation}) {
  const [playBtnClicked, setPlayBtnClicked] = useState(false);
  const [titleOpacity] = useState(new Animated.Value(0));

  const handlePlayBtnClick = () => {
    setPlayBtnClicked(!playBtnClicked);
    console.log('play button clicked');

    navigation.navigate('CharacterSelectPage');
  };

  useEffect(() => {
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const getOpacityStyle = () => {
    return {opacity: playBtnClicked ? 0.5 : 1};
  };

  return (
    <>
      <View style={styles.block}>
        <Image source={Images.MainBackground} style={styles.backgroundImage} />
        <View style={styles.inner}>
          <Animated.Image
            source={Images.Object1}
            style={[styles.object1, {opacity: titleOpacity}]}
          />
          <Animated.Image
            source={Images.Object2}
            style={[styles.object2, {opacity: titleOpacity}]}
          />
          <Animated.Image
            source={Images.Title}
            style={[styles.title, {opacity: titleOpacity}]}
          />
          <TouchableOpacity
            style={[styles.playBtn, getOpacityStyle()]}
            activeOpacity={0.7}
            onPress={handlePlayBtnClick}>
            <Image
              source={Images.PlayBtn}
              style={{width: '100%', height: '100%'}}
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
    top: 0,
    left: 0,
    width: '100%',
    height: '90%',
  },
  inner: {
    position: 'relative',
    width: 499,
    height: 915,
    flexShrink: 0,
  },
  title: {
    position: 'absolute',
    top: 250,
    left: 70,
    width: 365,
    height: 166,
    flexShrink: 0,
  },
  object1: {
    position: 'absolute',
    bottom: 250,
    right: 240,
    width: 260,
    height: 356,
    flexShrink: 0,
  },
  object2: {
    position: 'absolute',
    top: 100,
    right: 50,
    width: 146,
    height: 186,
    flexShrink: 0,
  },
  playBtn: {
    position: 'absolute',
    top: 450,
    right: 170,
    width: '35%',
    height: '5%',
    flexShrink: 0,
    borderColor: 'green',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
