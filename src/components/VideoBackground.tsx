//VideoBackground.tsx

import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import Video from 'react-native-video';

const VideoBackground: React.FC = () => {
  return (
    <View>
      <Video
        source={{uri: '../intro.mp4'}} // Can be a URL or a local file.
        style={styles.backgroundVideo}
        muted={false}
        repeat={false}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
        onError={e => {
          console.error(e);
        }}
      />
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  backgroundVideo: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoBackground;
