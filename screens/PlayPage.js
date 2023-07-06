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
  return (
    <>
      <View style={styles.block}>
        <Image source={Images.Background3} style={styles.Background3} />
        <View style={styles.inner} className="HeaderBtn">
          <View>
            <Image source={Images.HeaderBtn1} style={styles.HeaderBtn1} />
            <Image source={Images.HeaderBtn2} style={styles.HeaderBtn2} />
            <Image source={Images.HeaderBtn3} style={styles.HeaderBtn3} />
          </View>
          <View className="CharacterIcon">
            <Image
              source={Images.CharacterIcon1}
              style={styles.CharacterIcon1}
            />
            <Image
              source={Images.CharacterIcon2}
              style={styles.CharacterIcon2}
            />
            <Image
              source={Images.CharacterIcon3}
              style={styles.CharacterIcon3}
            />
          </View>
          <View className="OperationBtn"></View>
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
  Background3: {
    position: 'absolute',
    width: '100%',
    height: '95%',
    top: -100,
    flexShrink: 0,
  },
});

export default PlayPage;
