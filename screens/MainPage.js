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
          <Image source={Images.Object1} style={styles.object1} />
          <Image source={Images.Object2} style={styles.object2} />
          <Image source={Images.Title} style={styles.title} />
          <Image source={Images.PlayBtn} style={styles.playBtn} />
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
  },
});

export default MainPage;
