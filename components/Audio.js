//react-native-sound 라이브러리를 사용하여 audio 재생하기

import React, {useEffect} from 'react';
import Sound from 'react-native-sound';
// import BGM from '../assets/BGM';

const Audio = () => {
  useEffect(() => {
    // MP3 파일 경로
    const soundPath = Sound.MAIN_BUNDLE + '/raw/mainbgm.mp3';

    // 사운드 객체 생성
    const sound = new Sound(soundPath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('사운드 로드 오류:', error);
        return;
      }

      // 사운드 재생
      sound.play(success => {
        if (success) {
          console.log('사운드 재생 완료');
        } else {
          console.log('사운드 재생 오류');
        }
      });
    });

    // 화면이 언마운트될 때 사운드 정리
    return () => {
      if (sound) {
        sound.stop();
        sound.release();
      }
    };
  }, []);

  return null; // 렌더링이 필요하지 않으므로 null 반환
};

export default Audio;
