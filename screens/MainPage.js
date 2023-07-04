import React from 'react';
import {Text, View} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  useWindowDimensions,
  Animated,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

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
      <div style={styles.block}></div>
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
