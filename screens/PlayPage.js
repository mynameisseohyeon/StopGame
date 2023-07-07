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
        <PlayPageView />
      </View>
    </>
  );
}

function PlayPageView() {
  const [backgroundImage, setBackgroundImage] = useState(null); //배경 이미지
  const [objectImage, setObjectImage] = useState(null); //오브젝트 이미지
  const [startButtonDisabled, setStartButtonDisabled] = useState(false); //시작 버튼 비활성화
  const [startButtonOpacity, setStartButtonOpacity] = useState(1); //시작 버튼 투명도

  useEffect(() => {
    // 배경 이미지 랜덤으로
    const randomBackgroundImage = getRandomBackgroundImage();
    setBackgroundImage(randomBackgroundImage);
  }, []);

  const getRandomBackgroundImage = () => {
    const backgroundImages = [
      Images.Background3,
      Images.Background4,
      Images.Background5,
    ];
    const backgroundRandomIndex = Math.floor(
      Math.random() * backgroundImages.length,
    );
    return backgroundImages[backgroundRandomIndex];
  };

  useEffect(() => {
    // 오브젝트 이미지 랜덤으로
    const randomObjectImage = getrandomObjectImage();
    setObjectImage(randomObjectImage);
  }, []);

  const getrandomObjectImage = () => {
    const objectImages = [
      Images.Object3,
      Images.Object4,
      Images.Object5,
      Images.Object6,
      Images.Object7,
    ];
    const objectRandomIndex = Math.floor(Math.random() * objectImages.length);
    return objectImages[objectRandomIndex];
  };

  const StartBtnClick = () => {
    // start 버튼 클릭 시
    console.log('start button clicked');
    if (!startButtonDisabled) {
      //버튼이 활성화 상태일 경우
      setStartButtonDisabled(true);
      setStartButtonOpacity(0.5);
      // 오브젝트 내려가는 애니메이션 실행
      // 애니메이션 종료 후에 setStartButtonDisabled(false) 호출하여 다시 누를 수 있도록 설정
    }
  };

  const StopBtnClick = () => {
    // stop 버튼 클릭 시
    console.log('stop button clicked');
    setStartButtonDisabled(false);
    setStartButtonOpacity(1);
    // 오브젝트 내려가는 애니메이션 취소
  };

  return (
    <>
      <View style={styles.block}>
        <Image source={backgroundImage} style={styles.backgroundImage} />
        <View style={styles.inner}>
          <HeaderBtn></HeaderBtn>
          <CharacterIcon></CharacterIcon>
          <Image source={objectImage} style={styles.objectImage} />
          <View style={styles.OperationBtn}>
            <TouchableOpacity
              disabled={startButtonDisabled}
              onPress={StartBtnClick}
              activeOpacity={0.8}>
              <Image
                source={Images.StartBtn}
                style={[styles.StartBtn, {opacity: startButtonOpacity}]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={StopBtnClick} activeOpacity={0.8}>
              <Image source={Images.StopBtn} style={styles.StopBtn} />
            </TouchableOpacity>
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
    <>
      <Image source={Images.Score} style={styles.Score} />
      <View style={styles.CharacterIcon}>
        <Image source={Images.CharacterIcon1} style={styles.CharacterIcon1} />
        <Image source={Images.CharacterIcon2} style={styles.CharacterIcon2} />
        <Image source={Images.CharacterIcon3} style={styles.CharacterIcon3} />
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
    top: -10,
    right: -100,
  },
  Score: {
    top: 100,
    right: -37,
  },
  objectImage: {
    resizeMode: 'contain',
    position: 'absolute',
    top: 100,
    right: 200,
    width: 100,
    height: 100,
    flexShrink: 0,
  },
  OperationBtn: {
    flexDirection: 'row',
    top: 310,
    right: -80,
  },
  StopBtn: {
    top: -7,
    right: -60,
  },
});

export default PlayPage;
