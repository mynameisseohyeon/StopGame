import React, {useState, useEffect} from 'react';
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

function PlayPage() {
  return (
    <>
      <View>
        <PlayPagenView />
      </View>
    </>
  );
}

function PlayPagenView() {
  const [playBtnClicked, setPlayBtnClicked] = useState(false); //play버튼 클릭 시
  const [titleOpacity] = useState(new Animated.Value(0));

  const handlePlayBtnClick = () => {
    //클릭 시 true와 false가 전환된다
    setPlayBtnClicked(!playBtnClicked);
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
      <View style={styles.block}></View>
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
});

export default PlayPage;
