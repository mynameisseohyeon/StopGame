import React from 'react';
import {Text, View} from 'react-native';
// import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  StyleSheet,
  TextInput,
  Image,
  useWindowDimensions,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
// import Images from '../android/app/src/main/assets/images';
import Images from 'assets';

function MainPage() {
  return (
    <>
      <View>
        <Text>안녕하세요</Text>
      </View>
    </>
  );
}

function MainAnimated() {
  return (
    <>
      <div style={styles.block}>
        <image source={Images.MainBackgorund} />
      </div>
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
