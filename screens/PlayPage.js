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
        <View style={styles.inner}>
          <HeaderBtn></HeaderBtn>
          <CharacterIcon></CharacterIcon>
          <View style={styles.OperationBtn}>
            <Image source={Images.StartBtn} style={styles.StartBtn} />
            <Image source={Images.StopBtn} style={styles.StopBtn} />
          </View>
        </View>
      </View>
    </>
  );
}

function HeaderBtn() {
  return (
    <View style={styles.HeaderBtn}>
      <Image source={Images.HeaderBtn1} style={styles.HeaderBtn1} />
      <Image source={Images.HeaderBtn2} style={styles.HeaderBtn2} />
      <Image source={Images.HeaderBtn3} style={styles.HeaderBtn3} />
    </View>
  );
}

function CharacterIcon() {
  return (
    <View style={styles.CharacterIcon}>
      <Image source={Images.CharacterIcon1} style={styles.CharacterIcon1} />
      <Image source={Images.CharacterIcon2} style={styles.CharacterIcon2} />
      <Image source={Images.CharacterIcon3} style={styles.CharacterIcon3} />
    </View>
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
  HeaderBtn: {
    width: 48,
    height: 48,
    flexShrink: 0,
    flexDirection: 'row',
    top: 70,
    right: -80,
  },
  HeaderBtn3: {
    right: -190,
    top: -5,
  },
  CharacterIcon: {
    flexDirection: 'row',
    top: 100,
    right: -100,
  },
  OperationBtn: {
    flexDirection: 'row',
    top: 430,
    right: -80,
  },
  StopBtn: {
    top: -7,
    right: -60,
  },
});

export default PlayPage;
