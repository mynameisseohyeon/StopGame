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
        <MainAnimated />
      </View>
    </>
  );
}

function MainAnimated() {
  return (
    <>
      <View style={styles.block}>
        <Image source={Images.MainBackground} style={styles.backgroundImage} />
        <View style={styles.inner}>
          <Image source={Images.Object2} style={styles.object2} />
          <Image source={Images.Title} style={styles.title} />
          <Image source={Images.Object1} style={styles.object1} />
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
    height: '100%',
  },
  inner: {
    position: 'relative',
    width: 499,
    height: 915,
    flexShrink: 0,
  },
  title: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 365,
    height: 166,
    flexShrink: 0,
  },
  object1: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 310,
    height: 406,
    flexShrink: 0,
  },
  object2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 146,
    height: 186,
    flexShrink: 0,
  },
});

export default MainPage;
