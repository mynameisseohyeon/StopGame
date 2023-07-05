import React from 'react';
import {Text, View} from 'react-native';
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

function MainPage() {
  return (
    <>
      <View>
        <Text>안녕하세요</Text>
        <MainAnimated></MainAnimated>
      </View>
    </>
  );
}

function MainAnimated() {
  return (
    <>
      <View style={styles.block}>
        <Image source={Images.MainBackground} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    display: 'inline-flex',
    height: 844,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
